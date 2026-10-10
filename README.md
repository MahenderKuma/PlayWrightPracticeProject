# Playwright Automations

Simple Playwright project with example tests.

Setup

```bash
cd Playwright
npm install
# install browsers
npx playwright install

# run tests
npm test
# view HTML report
npm run test:report
```

## Docker

Build and run the tests in the official Playwright container:

```bash
docker build -t playwright-automations .
docker run --rm playwright-automations
```

## Jenkins

The root `Jenkinsfile` uses the same Playwright container image, runs `npm ci`
and the test suite, and archives the HTML report, test results, and JUnit output.
Configure a Jenkins Pipeline job to load this file from the repository.

Files

- `playwright.config.js` — Playwright config
- `tests/example.spec.js` — sample tests

Notes

- If you prefer TypeScript, run `npx playwright@latest init` and choose TypeScript when prompted.
