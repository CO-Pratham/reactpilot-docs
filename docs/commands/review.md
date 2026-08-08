---
sidebar_position: 4
---

# `reactpilot review`

Review local git diffs or GitHub Pull Requests using AST analysis and AI.

## Usage

```bash
reactpilot review [target] [options]
```

## Options

| Option | Description |
| :--- | :--- |
| `--github-action` | Running inside GitHub Actions environment |
| `--output <path>` | Write markdown review report to file |

---

## GitHub Actions Integration

Use `reactpilot-review-action` in your `.github/workflows/review.yml`:

```yaml
name: 'ReactPilot Code Review'
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: CO-Pratham/reactpilot-review-action@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          api-key: ${{ secrets.REACTPILOT_API_KEY }}
```
