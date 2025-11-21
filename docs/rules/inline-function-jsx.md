# Inline Function in JSX

**ID**: `inline-function`

## Description

Detects functions defined inline within JSX props. While convenient, this creates a new function reference on every render, which can break optimization of child components (e.g., those using `React.memo`).

## Example

**❌ Bad Code:**

```tsx
<button onClick={() => setCount(count + 1)}>Click me</button>
```

**✅ Good Code:**

```tsx
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);

<button onClick={handleClick}>Click me</button>
```

## Auto-Fix

✅ Supported (via AI). The `auto-fix` command can extract these into `useCallback` hooks or stable handlers.
