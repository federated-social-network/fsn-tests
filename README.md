# FSN Test Automation README

This directory contains the test assets for the project, the Federated Social Network.

The goal is to ensure critical user workflows continue to work reliably across releases.


## Location of Tests

All browser automation lives **inside the frontend repository**.

```
fsn-frontend/
│
├── src/
├── public/
├── tests/          ← Playwright tests live here
└── playwright.config.js
```

## What These Tests Cover

Using **Playwright**, we validate real user journeys through the UI while connected to running backend services.

Examples:

* authentication (login/logout/forgot password)
* creating content
* profile management
* social interactions
* discovery flows

If backend + DB are running, these become **full system tests**.


## How to Run the Tests

### Start backend

```bash
cd fsn-backend
npm start
```

### start frontend

```bash
cd fsn-frontend
npm run dev
```

### Run automation (new terminal)

```bash
cd fsn-frontend
npx playwright test
```

## View Test Report

After execution:

```bash
npx playwright show-report
```

This opens:

* pass/fail
* screenshots
* traces
* logs

## Test Organization Philosophy

Tests are grouped by feature modules, not by test type.

Example:

```
tests/
├── auth/
├── profile/
├── post/
├── social/
└── discovery/
```

## Regression Strategy

Our regression pack is derived from stable functional scenarios.

Before release, we validate that critical flows such as:

* login
* posting
* follow/accept
  continue to operate.


## Important Notes

* Tests assume services are running.
* Data prerequisites (users, relationships) must exist.
* Selectors may evolve with UI updates.
* Keep tests independent.


## API / Integration Tests

API validation is **not** executed via Playwright.

They are maintained separately inside the **Postman** application and exported to version-controlled collections.


