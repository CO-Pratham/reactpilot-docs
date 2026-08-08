---
sidebar_position: 5
---

# Product Roadmap

Our vision for **ReactPilot** is to build the ultimate developer assistant and static analysis ecosystem for modern React and TypeScript development. Below is our strategic roadmap organized by milestones and development phases.

---

## 🟢 Phase 1: Core Engine & CLI Foundation *(Completed - Q1 2026)*

The initial release focused on building a high-performance single-pass AST parser, CLI framework, and core AI refactoring capabilities.

- [x] **Single-Pass AST Analyzer:** Detect React anti-patterns (inline functions, invalid hooks, unmemoized render loops) in milliseconds.
- [x] **Selective Feature System (`reactpilot features`):** Opt-in modular architecture for lightweight installations.
- [x] **Intelligent AI Fix Engine (`reactpilot fix`):** Automated AST code refactoring powered by `gpt-4o-mini` or local Ollama instances.
- [x] **Codebase RAG Chat (`reactpilot ask`):** Natural language Q&A over full repository context with `.reactpilotignore` filtering.
- [x] **React 19 & Next.js 15 Migrations (`reactpilot migrate`):** Automated AST transformation for deprecated APIs with 1-click rollback backups.
- [x] **Interactive Dependency Graph (`reactpilot graph`):** Component hierarchy and circular dependency visualization.
- [x] **Local Developer Dashboard (`reactpilot dashboard`):** Real-time web UI running on `http://localhost:3000`.

---

## 🟡 Phase 2: IDE Integration & Developer Workflow *(In Progress - Q2 2026)*

Integrating ReactPilot seamlessly into daily editor workflows to provide instant feedback as developers type code.

- [🔄] **Official VS Code Extension:**
  - Real-time AST error highlighting and inline diagnostics.
  - Quick-fix code actions directly inside the editor.
  - Embedded architecture graph view panel.
- [🔄] **Enhanced AST Rule Engine:**
  - Custom rules for Next.js Server Components vs. Client Components boundary validation.
  - Automatic identification of unoptimized heavy third-party bundle imports.
- [ ] **JetBrains & Neovim Language Server Protocol (LSP):** Standardized LSP server implementation for cross-editor support.

---

## 🔵 Phase 3: Plugin System & Enterprise Governance *(Planned - Q3 2026)*

Empowering teams to write custom company-wide linting and refactoring rules, and share plugins easily.

- [ ] **Custom Rule Plugin Architecture (`reactpilot plugin`):**
  - Define custom AST rules in TypeScript or JavaScript.
  - Publish and install plugins via NPM and the ReactPilot Marketplace.
- [ ] **GitHub PR Review Bot (`reactpilot review --ci`):**
  - Automated PR feedback with inline diff comments and performance regression checks.
- [ ] **Monorepo & Multi-Package Support:**
  - Native cross-package dependency analysis for Turborepo and Nx workspaces.
- [ ] **Team Rule Configuration Sync:**
  - Centralized rule definitions and policy enforcement across engineering teams.

---

## 🟣 Phase 4: Specialized AI Models & Deep Analysis *(Future Vision - Q4 2026)*

Leveraging fine-tuned domain-specific AI models to deliver deeper architectural refactoring and predictive optimizations.

- [ ] **Fine-Tuned React LLM:**
  - Domain-specific AI model trained strictly on idiomatic React 19, TypeScript 5.x, and Next.js 15 best practices for ultra-accurate code generation.
- [ ] **Predictive Performance Regression Auditing:**
  - Predict memory leaks and re-render spikes prior to deployment based on component render frequency.
- [ ] **Automated Unit Test Generator:**
  - Automatically generate React Testing Library tests for refactored components.

---

## 💬 Community Feedback & Feature Requests

Have an idea or feature request for ReactPilot? We welcome community contributions and suggestions!

- **Submit an Feature Request:** [ReactPilot GitHub Issues](https://github.com/CO-Pratham/reactpilot/issues)
- **Discuss on GitHub Discussions:** [ReactPilot Discussions](https://github.com/CO-Pratham/reactpilot/discussions)
