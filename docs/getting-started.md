---
sidebar_position: 3
---

# Getting Started

Get up and running with ReactPilot in under 2 minutes.

## 1. Run Interactive Feature Setup

Initialize ReactPilot in your project:

```bash
reactpilot features
```

Select **`🌟 ALL FEATURES`** to activate the entire suite or pick individual modules.

---

## 2. Scan Your Project (`reactpilot analyze`)

Run static AST code analysis against your project root or specific component files:

```bash
# Scan current directory
reactpilot analyze

# Scan a specific component directory
reactpilot analyze ./src/components
```

ReactPilot will output a formatted issue table highlighting severity, rule name, file location, line number, and recommended refactoring steps.

---

## 3. Launch Local Developer Center (`reactpilot dashboard`)

Launch the visual web dashboard served locally at `http://localhost:3000`:

```bash
reactpilot dashboard
```

The Developer Center provides:
- Live Project Health Scores & Code Quality Metrics.
- Visual Architecture Component Graphs.
- RAG Codebase AI Chat History.
- React 19 & Next.js 15 Migration Wizards.
- ReactPilot Pro Early Access Waitlist.

---

## 4. Ask AI About Your Codebase (`reactpilot ask`)

Query your repository using natural language:

```bash
reactpilot ask "How are authentication states handled in this project?"
```
