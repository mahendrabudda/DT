# Trinethra — DT Fellows Feedback Analyzer

A MERN stack web application that analyzes supervisor feedback transcripts using a local LLM powered by Ollama and Llama 3.2.

The system evaluates fellows based on organizational capability, systems thinking, operational leverage, and process-building ability.

---

# Project Overview

This project was built as part of the DT Fellows AI Evaluation Assignment.

The application takes a supervisor conversation transcript as input and returns:

* Rubric score
* Evidence extraction
* KPI mapping
* Gap analysis
* Follow-up questions

The analysis is performed using a locally running LLM through Ollama.

---

# Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* CSS (inline styling)

## Backend

* Node.js
* Express.js

## AI / LLM

* Ollama
* Llama 3.2

---

# Folder Structure

```bash
dt-culturetech-ai-analyzer/
│
├── client/                 # React frontend
│
├── server/                 # Express backend
│   ├── prompts/
│   │   └── systemPrompt.js
│   │
│   ├── routes/
│   │   └── analyze.js
│   │
│   ├── services/
│   │   └── ollamaService.js
│   │
│   └── server.js
│
├── sample-transcripts.json
├── rubric.json
├── context.md
├── assignment.md
│
└── README.md
```

---

# What is Ollama?

Ollama allows Large Language Models (LLMs) like Llama to run locally on your computer.

Instead of sending data to OpenAI or cloud APIs, the model runs directly on your machine.

Benefits:

* No API cost
* Local processing
* Faster experimentation
* Privacy-friendly

---

# What is Llama 3.2?

Llama 3.2 is a Large Language Model created by Meta.

In this project, it is used to:

* Read transcripts
* Understand supervisor feedback
* Extract operational signals
* Score fellows using rubric logic

---

# How the Project Works

## Step 1 — User Pastes Transcript

The frontend accepts a supervisor feedback transcript.

Example:

```text
"Karthik is very sincere. He manages production tracking..."
```

---

## Step 2 — Frontend Sends Request

React frontend sends transcript to backend API.

```bash
POST /api/analyze
```

---

## Step 3 — Backend Calls Ollama

Express backend sends:

* system prompt
* transcript
* rubric instructions

to the local Llama model using Ollama.

---

## Step 4 — LLM Analyzes Transcript

The model evaluates:

* systems thinking
* operational leverage
* dependency risk
* process building
* scalability

---

## Step 5 — Structured JSON Response

Backend returns structured JSON:

```json
{
  "score": {
    "value": 6,
    "label": "Emerging Systems Thinker",
    "band": "Layer 1 → Layer 2",
    "justification": "Shows early systems thinking..."
  }
}
```

---

# Installation Guide

# 1. Clone Repository

```bash
git clone <your-github-url>
cd dt-culturetech-ai-analyzer
```

---

# 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

Install required packages:

```bash
npm install express cors axios
```

---

# 4. Install Ollama

Download Ollama:

https://ollama.com

Install it normally.

---

# 5. Pull Llama 3.2 Model

Open terminal:

```bash
ollama pull llama3.2
```

This downloads the model locally.

---

# 6. Verify Ollama

Run:

```bash
ollama run llama3.2
```

Test:

```text
hi
```

If the model responds, setup is successful.

---

# Running the Project

# Start Backend

```bash
cd server
node server.js
```

Expected:

```bash
Server running on port 5000
```

---

# Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Expected:

```bash
Local: http://localhost:5173
```

---

# API Endpoint

## POST `/api/analyze`

### Request

```json
{
  "transcript": "Supervisor feedback transcript here..."
}
```

---

### Response

```json
{
  "score": {
    "value": 6,
    "label": "Emerging Systems Thinker",
    "band": "Layer 1 → Layer 2",
    "justification": "Shows early systems thinking..."
  },
  "evidence": [],
  "kpiMapping": [],
  "gaps": [],
  "followUpQuestions": []
}
```

---

# Important Learning Concepts

## 1. Prompt Engineering

The quality of results depends heavily on the system prompt.

The prompt teaches the LLM:

* how to evaluate
* what signals matter
* how scoring should work

---

## 2. Systems Thinking vs Helpfulness

The assignment intentionally contains traps.

Example:

* Helpful employee ≠ scalable systems builder
* Critical supervisor ≠ weak fellow

The model must reason carefully.

---

## 3. Local LLM

This project uses a local AI model instead of cloud APIs.

Advantages:

* No token cost
* Works offline
* Faster iteration
* Better privacy

---

# Sample Test Cases

The repository contains 3 sample transcripts:

| Transcript | Key Evaluation Trap                             |
| ---------- | ----------------------------------------------- |
| Karthik    | Positive supervisor but mostly operational work |
| Meena      | Critical supervisor but real systems thinking   |
| Anil       | Very helpful but creates dependency             |

---

# Current Features

* Transcript analysis
* Rubric scoring
* Evidence extraction
* KPI mapping
* Gap analysis
* Follow-up question generation
* Local LLM integration
* Clean React dashboard UI

---

# Future Improvements

* MongoDB integration
* Transcript history
* Authentication
* PDF report export
* Multiple model support
* Streaming responses
* Better prompt optimization

---

# Troubleshooting

## Blank White Screen

Check:

* component import names
* syntax errors
* Vite console logs

---

## Ollama Not Responding

Run:

```bash
ollama run llama3.2
```

If this fails:

* restart Ollama
* verify installation

---

## Backend API Error

Check:

* backend port
* CORS setup
* axios request URL

---

# Learning Outcomes

This project helps understand:

* MERN stack development
* REST APIs
* Local AI deployment
* Prompt engineering
* LLM reasoning
* Organizational capability analysis

---

# Author

Mahendra B

Built using:

* React
* Node.js
* Express
* Ollama
* Llama 3.2
