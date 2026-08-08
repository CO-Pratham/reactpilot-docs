---
sidebar_position: 7
---

# `reactpilot plugin`

Manage custom AST rules and plugins from the ReactPilot marketplace.

## Usage

```bash
reactpilot plugin <action> [name] [options]
```

## Subcommands

| Action | Description |
| :--- | :--- |
| `search <query>` | Search marketplace for published plugins |
| `install <name>` | Install a plugin globally |
| `remove <name>` | Uninstall a plugin |
| `list` | List all installed plugins |
| `update` | Update installed plugins |
| `info <name>` | View detailed plugin metadata |

## Options

| Option | Description |
| :--- | :--- |
| `--local <path>` | Install plugin from a local directory |
