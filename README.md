# 🔎 PromptQL FDE Challenge — Ricardo De Biase

This project is my submission for the **PromptQL Forward Deployment Engineer Challenge**. It demonstrates PromptQL's full capabilities across data modeling, semantic reasoning, prompt engineering, and multi-source insights — with zero hallucination tolerance.

---

## ✅ Project Overview

This project simulates an AML analyst assistant for a fictional Tier 1 bank, **Aurelia Bank**. Using PromptQL's semantic layer and supergraph engine, the assistant performs intelligent investigations across:

- 🧾 **PostgreSQL** transactional tables
- 🗃️ **MongoDB** case management and sanctions data

All natural-language queries are executed without manually defined relationships — thanks to tuned metadata and a well-aligned system prompt.

---

## 🧠 Technologies

- **PromptQL**
- **NDC Connectors (Postgres + MongoDB)**
- **Docker / DDN CLI**

---

## 🧰 Local Setup

> Requires: `ddn` CLI + Docker

```bash
git clone https://github.com/rdebiasec/fde-challenge
cd fde-challenge

# Restore your env
cp .env.example .env

# Build supergraph and start services
ddn supergraph build local
ddn run docker-start
