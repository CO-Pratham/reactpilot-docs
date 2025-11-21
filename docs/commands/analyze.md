# Analyze Command

The `analyze` command is the core of ReactPilot. It scans your codebase using AST analysis to identify bugs, performance issues, and code quality problems.

## Usage

```bash
reactpilot analyze [path] [options]
```

- `[path]`: The directory or file to analyze. Defaults to current directory `.`.

## Options

- `--json`: Output results in JSON format (useful for CI/CD integration).
- `--ignore <patterns>`: Comma-separated list of glob patterns to ignore.

## Output

The command provides a detailed report including:

1.  **Issues List**: Grouped by file, showing line numbers and issue types.
2.  **Performance Score**: A 0-100 score based on the number and severity of issues.
3.  **Project Summary**: Statistics on your codebase (component count, hooks usage, etc.).

## Example

```bash
reactpilot analyze ./src --ignore "**/*.test.tsx"
```
