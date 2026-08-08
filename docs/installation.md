---
sidebar_position: 2
---

# Installation & System Requirements

ReactPilot is distributed as an npm package `@reactpilot/cli` compatible with **macOS, Windows, and Linux**.

## Quick Installation

You can install ReactPilot globally or run it on-demand via `npx`:

```bash
# Global installation
npm install -g @reactpilot/cli

# Run on demand via npx
npx @reactpilot/cli features
```

---

## Selective Feature Setup

ReactPilot features a modular, opt-in dependency model. On first run, ReactPilot launches an interactive multi-select CLI prompt allowing you to pick exactly which features to activate:

```
? Select the features you want to install (Space = toggle, Enter = confirm)
  ◯ 🌟 ALL FEATURES            — Enable & install all ReactPilot features
  ◯ Code Analyzer              — AST-based React issue detection
  ◯ AI Fix Engine              — AI-powered code fixes [needs API key]
  ◯ Dependency Graph           — Interactive architecture graph
  ◯ Migration Engine           — Automated React 19 and Next.js migration
  ◯ Project Chat (AI RAG)      — Ask questions about your codebase [needs API key]
  ◯ GitHub / PR Review         — Review local git diffs and pull requests
  ◯ Local Dashboard            — Web dashboard served locally
  ◯ Plugin System              — Install and manage ReactPilot plugins
```

- **Enable All Features:** Pressing Enter or selecting **`🌟 ALL FEATURES`** activates all 8 modules.
- **CI / Non-Interactive Mode:** Pass `--all` or `--none` for automated scripts:

```bash
# Enable all features non-interactively (CI mode)
reactpilot features --all

# Reconfigure anytime
reactpilot features --reset
```

---

## Operating System Compatibility

| Operating System | Supported | Notes |
| :--- | :---: | :--- |
| **macOS** | ✅ Yes | Full native support (Apple Silicon & Intel) |
| **Windows** | ✅ Yes | CMD, PowerShell, and WSL2 (`normalizePath` support) |
| **Linux** | ✅ Yes | Ubuntu, Debian, Fedora, Arch |

---

## Environment Configuration

Create a `.env` file in your project root or set environment variables globally:

```env
# Optional: Required only for AI-powered features (ai-fix, project-chat, review)
REACTPILOT_API_KEY=sk-...

# Optional: Custom OpenAI API Base URL (Default: https://api.openai.com/v1)
REACTPILOT_API_BASE_URL=https://api.openai.com/v1

# Optional: LLM Model (Default: gpt-4o-mini)
REACTPILOT_MODEL=gpt-4o-mini
```
