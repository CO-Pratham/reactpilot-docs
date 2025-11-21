# Auto-Fix Command

The `auto-fix` (or `fix`) command automatically resolves issues detected by the analyzer. It uses a combination of rule-based logic (for simple fixes) and AI (for complex refactoring).

## Usage

```bash
reactpilot auto-fix [target] [options]
```

- `[target]`: The file or directory to fix. Defaults to current directory `.`.

## Options

- `--rule <rule-id>`: Only fix issues of a specific type (e.g., `unused-import`).
- `--dry-run`: Show what would be changed without modifying files.

## Supported Rules for Auto-Fix

| Rule ID | Description | Fix Method |
| :--- | :--- | :--- |
| `unused-import` | Removes unused imports | Rule-based |
| `inline-function` | Extracts inline functions | AI / Rule-based |
| `magic-number` | Extracts magic numbers to constants | AI |

## Example

Fix only unused imports in the `src` directory:

```bash
reactpilot auto-fix ./src --rule unused-import
```
