# Optimize Command

The `optimize` command focuses specifically on performance improvements. It identifies expensive renders and suggests optimizations like `useMemo`, `useCallback`, or component memoization.

## Usage

```bash
reactpilot optimize [path]
```

## What it checks

- **Expensive Calculations**: Heavy computations inside components that are not memoized.
- **Unstable References**: Objects or functions created on every render that are passed as props.
- **Large Component Trees**: Components that re-render too often.

## Example

```bash
reactpilot optimize ./src/components/Dashboard.tsx
```
