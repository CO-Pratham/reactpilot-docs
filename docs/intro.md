---
sidebar_position: 1
---

# Introduction to ReactPilot

**ReactPilot** is a modular, AI-powered developer assistant and static analysis engine built specifically for React, Next.js, and TypeScript applications.

Combining single-pass AST AST parsing, LLM-powered intelligent code fixes, interactive architecture dependency graphing, and automated GitHub PR reviews, ReactPilot helps frontend teams maintain clean, high-performance codebases.

---

## Key Features

- **⚡ Selective Feature System:** Opt-in modular architecture. Only install the features and dependencies you need using `reactpilot features`.
- **🔍 Single-Pass AST Analyzer:** Detects invalid hook usage, unoptimized re-renders, inline JSX functions, and large component smells in milliseconds.
- **🤖 Intelligent AI Fix Engine:** Automatically fixes AST violations and refactors code using GPT-4o-mini or your custom OpenAI-compatible endpoint.
- **📊 Architecture Dependency Graph:** Generates interactive visual graph representations of your React component hierarchy, routes, and circular dependencies.
- **🚀 Automated React 19 & Next.js 15 Migrations:** Safely migrates deprecated APIs (`useFormStatus`, `useFormState`, Server Actions, params unwrapping) with automatic rollback backups.
- **💬 Codebase RAG Chat (`reactpilot ask`):** Ask natural language questions about your project structure with `.reactpilotignore` support.
- **🖥️ Local Developer Center Dashboard:** Serve a visual web dashboard at `http://localhost:3000` with real-time agent status and Pro Waitlist managed AI.
- **🌐 Cross-Platform Compatibility:** Full support for **macOS, Windows (CMD & PowerShell), and Linux**.

---

## Architecture Overview

```
                          ┌──────────────────────────┐
                          │    @reactpilot/cli       │
                          └─────────────┬────────────┘
                                        │
        ┌───────────────────────────────┼───────────────────────────────┐
        ▼                               ▼                               ▼
┌──────────────┐               ┌────────────────┐               ┌──────────────┐
│ AST Analyzer │               │ AI Fix Engine  │               │ RAG Project  │
│  (Babel AST) │               │ (GPT-4o-mini)  │               │   Chat       │
└──────────────┘               └────────────────┘               └──────────────┘
```
