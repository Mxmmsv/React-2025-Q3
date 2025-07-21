# Rick and Morty RESTful API App

This is a school project for building a **RESTful API web app** using data from the Rick and Morty API. The project is focused on exploring modern front-end practices, including TypeScript, React, and comprehensive tooling for development and testing.

## Getting Started

### Prerequisites

- Node.js (preferably v16+)
- npm or yarn package manager

### Installation

```bash
git clone <your-repository-url>
cd <project-directory>
npm install
```

## Available Scripts

In the project directory, you can run the following commands:

| Script          | Description                                                                    |
| :-------------- | :----------------------------------------------------------------------------- |
| `dev`           | Start the app in development mode using Vite. Hot-reloads on code changes.     |
| `build`         | Build the app for production. Runs TypeScript project build, then Vite build.  |
| `preview`       | Serve the built app locally for previewing the production build.               |
| `prepare`       | Initialize Husky hooks for git workflow automations (e.g., pre-commit hooks).  |
| `lint`          | Run ESLint to analyze source code for potential issues or stylistic errors.    |
| `lint:fix`      | Automatically fix lint errors using ESLint.                                    |
| `format:fix`    | Format the codebase using Prettier. Applies the project's code style.          |
| `typecheck`     | Run TypeScript compiler in type-checking mode without generating output files. |
| `test`          | Run all tests using Vitest. Provides fast feedback during development.         |
| `test:ui`       | Launch interactive Vitest UI with code coverage.                               |
| `test:coverage` | Run Vitest tests and output code coverage report.                              |
| `spellcheck`    | Check "src/\*_/_.{ts, tsx}" for word mistake                                   |

## Project Structure

- `/src` — All source code and components.
- `/public` — Static files.
- `vite.config.ts` — Vite configuration.

## School Task Link

Project is completed as part of the [Rolling Scopes School React Course](https://github.com/rolling-scopes-school/tasks/tree/master/react)
