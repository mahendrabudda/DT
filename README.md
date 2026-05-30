# README Requirements

## 1. Setup Instructions

### Prerequisites

* Node.js (v18 or above)
* npm
* Ollama

### Install Dependencies

Backend:

```bash
cd server
npm install
```

Frontend:

```bash
cd client
npm install
```

### Download LLM

```bash
ollama pull llama3.2
```

### Start Ollama

```bash
ollama run llama3.2
```

### Start Backend

```bash
cd server
node server.js
```

### Start Frontend

```bash
cd client
npm run dev
```

Application will be available at:

```text
http://localhost:5173
```

---

# 2. Architecture

The application follows a simple client-server architecture.

```text
User
  │
  ▼
React Frontend
  │
  ▼
Express Backend
  │
  ▼
Ollama API
  │
  ▼
Llama 3.2 Model
  │
  ▼
Structured JSON Response
  │
  ▼
React Dashboard
```

### Flow

1. User pastes supervisor transcript.
2. Frontend sends transcript to backend.
3. Backend combines transcript with system prompt.
4. Ollama forwards prompt to Llama 3.2.
5. Model analyzes transcript using rubric rules.
6. Structured JSON is returned.
7. Frontend displays score, evidence, KPI mapping, gaps, and follow-up questions.

---

# 3. Ollama Model

## Model Used

Llama 3.2

### Why Llama 3.2?

* Runs locally on consumer laptops.
* No API costs.
* Strong reasoning capabilities.
* Easy integration with Ollama.
* Suitable for prompt-engineering experiments.

### Why Ollama?

Ollama provides a simple local interface for running LLMs.

Benefits:

* Offline execution
* Data privacy
* No external API dependency
* Fast development workflow

### Model Invocation

Backend sends:

* System prompt
* Transcript
* Evaluation instructions

to Ollama's local API.

The model returns structured JSON output used by the frontend.

---

# 4. Design Decisions

## Local LLM Instead of Cloud APIs

Chosen because:

* No usage costs.
* Easier testing.
* Better privacy.
* Assignment specifically encourages local deployment.

---

## Structured JSON Output

The model is instructed to return JSON rather than free-form text.

Benefits:

* Easy frontend rendering.
* Predictable responses.
* Simpler debugging.

---

## Prompt-Centric Evaluation

Business logic is primarily implemented through prompt engineering rather than hardcoded rules.

Benefits:

* Easier iteration.
* Flexible evaluation criteria.
* Better alignment with rubric-based scoring.

---

## Separate Frontend and Backend

The project uses a clean separation:

Frontend:

* User interface
* Result visualization

Backend:

* LLM communication
* Prompt handling
* Response parsing

This improves maintainability and scalability.

---

# 5. Future Improvements

## Short-Term

* Improve prompt quality.
* Better evidence extraction.
* More accurate rubric scoring.
* Additional transcript test cases.

---

## Medium-Term

* Store transcript history in MongoDB.
* User authentication.
* Report generation.
* Export analysis to PDF.

---

## Long-Term

* Multi-model support.
* Fine-tuned evaluation model.
* Analytics dashboard.
* Batch transcript processing.
* Admin review workflows.
* Confidence scoring.
* Real-time streaming responses.

---

# Known Limitations

* Evaluation quality depends heavily on prompt design.
* Small local models may occasionally miss subtle rubric signals.
* Scores may vary slightly between runs.
* No persistent storage in the current version.
