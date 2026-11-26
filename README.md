# CI/CD Exercise — Simple Counter Webapp

A tiny static webapp used to practice a CI/CD workflow with GitHub Actions.

## What the app does

A counter with increment / decrement / reset buttons. The core logic lives in
`counter.js` (pure functions) and is covered by unit tests in `counter.test.js`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Run tests

```bash
npm test
```

## The CI/CD pipeline (`.github/workflows/ci-cd.yml`)

1. **Test job** — runs on every push and pull request to `main`:
   - Checkout the code
   - Setup Node.js 20
   - Run `npm test` (unit tests)
2. **Deploy job** — only runs when tests pass **and** the push is to `main`:
   - Builds a `dist/` folder and injects the git commit SHA as the app version
   - Deploys the static site to GitHub Pages

## Exercise tasks

1. Push this project to a GitHub repository and enable
   **Settings → Pages → Source: GitHub Actions**.
2. Open a pull request with a small change (e.g. change the button color in
   `styles.css`) and watch the **Test** job run.
3. Merge the PR and watch the **Deploy** job publish the site.
4. Now break something: change `nextValue` in `counter.js` so the counter
   doesn't clamp at the max (or make a test fail). Push to a branch and open a
   PR — the pipeline should fail, blocking the merge.
5. Fix the code, verify the pipeline passes, merge, and see the deployment.
