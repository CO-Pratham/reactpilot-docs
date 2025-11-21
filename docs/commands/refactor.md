# Refactor Command

The `refactor` command helps you restructure existing code. It can split large components, rename variables across files, or modernize legacy code (e.g., Class to Functional components).

## Usage

```bash
reactpilot refactor <path> [instruction]
```

- `<path>`: The file or component to refactor.
- `[instruction]`: (Optional) Natural language instruction for the refactoring.

## Examples

Convert a class component to functional:

```bash
reactpilot refactor src/LegacyComponent.tsx "Convert to functional component"
```

Split a large component:

```bash
reactpilot refactor src/BigWidget.tsx "Extract the header part into a separate component"
```
