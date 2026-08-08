---
sidebar_position: 3
---

# `reactpilot ask`

Chat with your React project using RAG codebase indexing and AI.

## Usage

```bash
reactpilot ask [question] [options]
```

## Options

| Option | Description |
| :--- | :--- |
| `--index` | Force re-index the project codebase |
| `--no-stream` | Disable streaming output responses |

---

## `.reactpilotignore` Support

You can create a `.reactpilotignore` file in your project root to exclude specific directories or files from being indexed into the RAG vector store:

```gitignore
# Exclude build outputs and node_modules
dist/
build/
.next/
*.min.js
```
