---
sidebar_position: 2
---

# `reactpilot auto-fix`

Automatically resolve AST issues across your project using AI and AST transformations.

## Usage

```bash
reactpilot auto-fix [target] [options]
```

## Examples

```bash
# Auto-fix all detected issues in current directory
reactpilot auto-fix

# Auto-fix only inline JSX function smells
reactpilot auto-fix --rule inline-function-jsx
```
