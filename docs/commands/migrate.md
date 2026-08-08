---
sidebar_position: 6
---

# `reactpilot migrate`

Automate React 19 and Next.js 15 breaking changes migration with automatic safety backups.

## Usage

```bash
reactpilot migrate <mode> [target] [options]
```

## Migration Modes

| Mode | Description |
| :--- | :--- |
| `react19` | Migrate component syntax, hooks, and types to React 19 standards |
| `nextjs` | Migrate App Router, params unwrapping, and async API patterns |
| `status` | Check current project migration status |
| `rollback` | Restore project state from `.reactpilot-backup/` |

## Options

| Option | Description |
| :--- | :--- |
| `--dry-run` | Preview AST code changes without modifying files |
| `--no-backup` | Skip creating a local backup archive |
| `--report <path>` | Write markdown migration report to file |
