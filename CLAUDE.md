# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Node.js/Express REST API that combines two names and returns combination results with "goodness" scores. The API logs all requests to a file.

## Architecture

- **Single-file application**: The entire API is in [app.js](app.js)
- **Single endpoint**: `GET /api/combine` - receives two names as query parameters, computes combinations, and returns results as JSON
- **File-based logging**: All API requests are logged to `logs/output.log` using Node.js `fs.appendFile`

### Current Implementation Status

The [app.js:19](app.js#L19) contains TODO comments indicating incomplete functionality:
- Extract query string parameters (line 17)
- Compute name combinations (line 19)
- The results array is currently hardcoded with a single example result (line 23)

## Development Commands

### Start the development server
```bash
npm start
```
Runs the app with nodemon on http://localhost:3000 (watches for file changes and auto-restarts)

### Manual start
```bash
node app.js
```

### Testing
No test framework is currently configured. The test script exits with an error.

## Key Dependencies

- **express** ^5.1.0 - Web framework
- **gitignore** ^0.7.0 - Gitignore file generator (dev utility)

## Important Notes

- **Port**: The server runs on port 3000 (hardcoded in [app.js:6](app.js#L6))
- **Logs directory**: Must exist before starting the server or file write operations will fail
- **Bug**: Line 28 uses `Date` object instead of `Date.now()` or proper date formatting, which will log `[Function: Date]` instead of a timestamp