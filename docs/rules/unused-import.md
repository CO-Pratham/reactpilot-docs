# Unused Import

**ID**: `unused-import`

## Description

Detects import statements that are imported but never used in the file. These clutter the code and can increase bundle size (though tree-shaking often handles this, it's still bad practice).

## Example

**❌ Bad Code:**

```tsx
import React, { useState, useEffect } from 'react'; // useEffect is unused

export const MyComponent = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
```

**✅ Good Code:**

```tsx
import React, { useState } from 'react';

export const MyComponent = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
```

## Auto-Fix

✅ Supported. The `auto-fix` command will remove the unused specifiers or the entire import statement if empty.
