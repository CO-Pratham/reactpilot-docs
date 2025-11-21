# Invalid Hook Usage

**ID**: `invalid-hook`

## Description

Checks for violations of the [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning). Hooks must only be called at the top level of a React function component or custom hook, not inside loops, conditions, or nested functions.

## Example

**❌ Bad Code:**

```tsx
if (condition) {
  useEffect(() => { ... }); // ❌ Hook inside condition
}
```

**✅ Good Code:**

```tsx
useEffect(() => {
  if (condition) { ... }
}, [condition]);
```

## Auto-Fix

❌ Not supported automatically as it often requires logical restructuring.
