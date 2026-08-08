---
sidebar_position: 6
---

# Frequently Asked Questions (FAQ)

Got questions about **ReactPilot**? Find detailed answers below regarding security, architecture, performance, supported frameworks, and CLI capabilities.

---

## 🔒 Security & Privacy

### Is my source code sent to external cloud servers?
**No, by default ReactPilot operates locally.** 

- **AST Static Analysis:** AST parsing, dependency graph generation, and linting run entirely on your local machine.
- **Local LLM Support:** When using local AI providers like [Ollama](https://ollama.com), all prompt engineering and code refactoring are executed offline. Zero data leaves your computer.
- **Cloud LLM Support:** If you configure ReactPilot to use OpenAI (`gpt-4o-mini` or custom OpenAI-compatible endpoints), only the specific code snippets relevant to the requested rule or prompt are transmitted. 

:::tip Privacy Best Practice
You can exclude sensitive files or directories from AI inspection by creating a `.reactpilotignore` file in your repository root.
:::

### Does ReactPilot require an API key to function?
Only for cloud AI-assisted fixing (`reactpilot fix --ai`) and natural language RAG queries (`reactpilot ask`). The static analysis engine (`reactpilot analyze`), dependency graph builder (`reactpilot graph`), and migration checks work **100% offline without any API key**.

---

## ⚡ AST static Analysis & Performance

### How is ReactPilot different from standard linters like ESLint?
While ESLint checks syntax rules line-by-line, ReactPilot builds a full single-pass Babel Abstract Syntax Tree (AST) representation of your React component hierarchy. This allows ReactPilot to:
1. Detect complex React-specific anti-patterns (e.g., unnecessary inline JSX functions, prop drilling, unmemoized object creation inside render loops).
2. Trace cross-component dependency trees and detect circular imports.
3. Automatically perform safe AST-level refactoring without breaking formatting or code semantics.

### How fast is the AST Analyzer?
ReactPilot's single-pass parser processes hundreds of TypeScript/JSX files in **milliseconds**. It uses parallel worker threads to scan large monorepos with minimal overhead.

---

## 🚀 Frameworks & Migrations

### Which React frameworks and versions are supported?
ReactPilot supports all modern React ecosystems:
- **React:** Versions 16.8 through **React 19**.
- **Next.js:** Versions 12 through **Next.js 15 (App Router & Pages Router)**.
- **Remix & Vite:** Full support for React SPA and SSR setups.
- **TypeScript:** Native support for `.ts` and `.tsx` files without needing separate build steps.

### How does the automated migration feature (`reactpilot migrate`) work?
ReactPilot automates breaking-change updates when upgrading to **React 19** or **Next.js 15**. It scans your codebase for deprecated APIs (such as `useFormStatus`, `useFormState`, legacy Server Actions syntax, and asynchronous `params` unwrapping), updates the AST nodes safely, and automatically creates a `.reactpilot-backup` directory prior to making changes.

:::info Safe Rollbacks
If a migration does not meet your expectations, run `reactpilot migrate --rollback` to instantly restore your original source code from the backup archive.
:::

---

## 🧩 Features & Architecture

### What is the Selective Feature System (`reactpilot features`)?
To keep the CLI fast and lightweight, ReactPilot uses an opt-in modular architecture. Core static analysis comes pre-packaged, while heavy optional modules (such as the interactive graph visualizer, local web dashboard, or specialized migration transformers) can be selectively enabled or installed on demand:

```bash
# View available feature modules
reactpilot features list

# Install only what you need
reactpilot features enable graph
```

### Can I run ReactPilot in CI/CD pipelines?
Yes! ReactPilot provides full CLI support for CI/CD environments like GitHub Actions, GitLab CI, and Vercel. You can use `--json` or `--exit-on-warning` flags to enforce clean code gates:

```bash
npx @reactpilot/cli analyze . --json --exit-on-warning
```

---

## 💼 Pro & Commercial Usage

### Is ReactPilot free to use?
Yes, the core ReactPilot CLI, AST engine, dependency graph builder, and local features are **open-source (MIT License)** and free for personal and commercial projects.

### What is included in the Pro Waitlist?
The upcoming **ReactPilot Pro** suite includes cloud team dashboards, multi-repo architecture health monitoring, automated PR code review bots, and managed AI endpoints optimized specifically for React refactoring. You can join the waitlist in the local developer center using `reactpilot dashboard`.
