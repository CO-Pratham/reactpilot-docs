# Troubleshooting

## Common Issues

### "LLM Connection Failed"

If you see errors related to the AI engine:

1.  Check your `.env` file.
2.  Ensure your API key is correct.
3.  If using Ollama, make sure the local server is running (`ollama serve`).

### "Syntax Error" during analysis

ReactPilot uses Babel to parse your code. If you use experimental syntax that isn't supported, you might see parse errors. Ensure your code is valid TypeScript/JavaScript.
