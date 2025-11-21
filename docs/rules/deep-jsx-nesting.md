# Deep JSX Nesting

**ID**: `deep-jsx`

## Description

Warns when JSX structure is nested too deeply (default > 10 levels). Deep nesting makes the code hard to follow and often indicates a need for component extraction.

## Example

**❌ Bad Code:**

```tsx
<div>
  <div>
    <div>
      ... (10+ levels deep) ...
    </div>
  </div>
</div>
```

## Auto-Fix

❌ Not supported automatically.
