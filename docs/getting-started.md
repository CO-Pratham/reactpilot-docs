---
sidebar_position: 3
---

# Getting Started

This guide will help you analyze your first project with ReactPilot.

## 1. Navigate to your project

Open your terminal and navigate to the root of your React application.

```bash
cd my-react-app
```

## 2. Run Analysis

Run the `analyze` command to scan your project for issues and get a performance score.

```bash
reactpilot analyze .
```

You will see output similar to this:

```text
Analyzing project...
✔ Analysis complete

Issues found:
- src/App.tsx: Unused import 'useEffect' (line 4)
- src/components/Header.tsx: Inline function in JSX prop (line 12)

--------------------------------------------------
ReactPilot Performance Score: 85/100
--------------------------------------------------
Project Summary:
Files: 24
Components: 12
Hooks Used: 45
Potential Bugs: 2
```

## 3. Fix Issues

To automatically fix the detected issues, use the `auto-fix` command:

```bash
reactpilot auto-fix .
```

This will attempt to resolve issues like unused imports and inline functions automatically.

## 4. Configure AI (Optional)

For more complex fixes, ReactPilot uses an LLM. Create a `.env` file in your project root:

```env
REACTPILOT_API_KEY=your_openai_api_key
```

Or for local Ollama:

```env
REACTPILOT_API_BASE_URL=http://localhost:11434/v1
REACTPILOT_MODEL=llama3
REACTPILOT_API_KEY=ollama
```
