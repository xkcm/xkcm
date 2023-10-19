---
title: Scrooge

projectId: scrooge
projectName: Scrooge
summary: Financial tracking app
status: wip
---

## About this project

Scrooge is a financial manager application, built with TypeScript.

Scrooge allows you to add records with expenses and incomes, displays it in a readable form and generates multiple graphs.

## Used technologies

Databases:

- **PostgreSQL** for persistance
- **Redis** for quick access and caching

Front-end:

- **Vue 3** _SPA_
- **vue-router**
- **@tanstack/vue-query** (formerly `vue-query`)
- **radix-vue** for UI library components

Back-end:

- **NodeJS** runtime
- **ExpressJS** for handling HTTP Requests
- **Prisma** for ORM

Authentication/authorization: custom auth system based on JWT Tokens and Login Sessions
