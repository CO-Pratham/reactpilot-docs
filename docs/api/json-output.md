# JSON Output Format

When running `analyze --json`, the output follows this schema:

```json
{
  "score": 85,
  "summary": {
    "files": 24,
    "components": 12,
    "hooks": 45
  },
  "issues": [
    {
      "file": "src/App.tsx",
      "line": 4,
      "type": "unused-import",
      "message": "Unused import 'useEffect'",
      "severity": "warning"
    }
  ]
}
```
