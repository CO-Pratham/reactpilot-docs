---
sidebar_position: 1
---

# `reactpilot features`

Configure or install ReactPilot features on demand.

## Usage

```bash
reactpilot features [options]
```

## Options

| Option | Description |
| :--- | :--- |
| `--reset` | Force re-run the interactive feature selection prompt |
| `--all` | Non-interactive CI mode: enable and install all 8 features |
| `--none` | Non-interactive CI mode: disable optional features |

---

## Feature Store (`~/.reactpilot/features.json`)

User choices are stored globally in `~/.reactpilot/features.json`. Optional external dependencies (such as `@babel/traverse`, `d3`, or `openai`) are installed on demand to `~/.reactpilot/plugins/node_modules` with shared-dependency protection.

## Available Features

1. **`analyzer`** — AST-based React code smell and hook issue detection.
2. **`ai-fix`** — AI-powered single-file and project-wide auto-fix engine.
3. **`graph`** — Interactive architecture dependency graph generator.
4. **`migration`** — React 19 and Next.js 15 breaking changes migration engine.
5. **`project-chat`** — Codebase RAG AI assistant with `.reactpilotignore` support.
6. **`github-review`** — Automated local diff and GitHub PR code review bot.
7. **`dashboard`** — Local Developer Center web dashboard served on port 3000.
8. **`plugin-system`** — Marketplace plugin manager for custom AST rules.
