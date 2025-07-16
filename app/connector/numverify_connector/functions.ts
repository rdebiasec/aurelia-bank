import fetch from "node-fetch";

/**
 * Interface representing the detailed response from NumVerify API for phone validation.
 */
interface NumVerifyResponse {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  location: string;
  carrier: string;
  line_type: string;
}

/**
 * Validates a phone number using the NumVerify API.
 * @param {string} phoneNumber - The phone number to validate, including country code (e.g. "+14158586273").
 * @returns {Promise<NumVerifyResponse>} The detailed phone number validation information returned by the NumVerify API.
 * @throws Will throw an error if the API request fails.
 * @readonly Exposes the function as an NDC function (read-only, no data modification).
 */
export async function checkPhoneNumber(phoneNumber: string): Promise<NumVerifyResponse> {
  // Hardcoded API key
  const apiKey = "c7db7184745933f419f14fd26160c9c2";

  const url = `https://apilayer.net/api/validate?access_key=${apiKey}&number=${encodeURIComponent(phoneNumber)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`NumVerify API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return {
    valid: data.valid,
    number: data.number,
    local_format: data.local_format,
    international_format: data.international_format,
    country_prefix: data.country_prefix,
    country_code: data.country_code,
    country_name: data.country_name,
    location: data.location,
    carrier: data.carrier,
    line_type: data.line_type,
  };
}
