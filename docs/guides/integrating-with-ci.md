# Integrating with CI/CD

You can run ReactPilot as part of your Continuous Integration pipeline to ensure code quality.

## GitHub Actions Example

```yaml
name: ReactPilot Analysis
on: [push]
jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install -g @reactpilot/cli
      - run: reactpilot analyze . --json > report.json
```
