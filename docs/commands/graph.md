---
sidebar_position: 5
---

# `reactpilot graph`

Generate an interactive visual architecture dependency graph of your React project.

## Usage

```bash
reactpilot graph [target] [options]
```

## Options

| Option | Description |
| :--- | :--- |
| `--output <path>` | Output file path (default: `./reactpilot-graph.html`) |
| `--format <fmt>` | `html` \| `svg` \| `json` (default: `html`) |
| `--open` | Automatically open in browser after generation |
| `--theme <t>` | `dark` \| `light` (default: `dark`) |
| `--filter <f>` | Filter by node type: `component,hook,context,route,unused,circular` |
