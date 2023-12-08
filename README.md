# Welcome to the NextJS FullStack App!

This Branch houses all of Full Stack app's code — Tailwind Prisma Postgresql(railway) Typescript

## Setting up your development environment

### Pre-reqs

You need to install `pnpm` if you don't have it already:

> If you already have pnpm, make sure it's version `8.10.5` or later

```sh
npm -g install pnpm@8.10.5
```

### Installation

After cloning the repository, Install dependencies:

```sh
pnpm i
```

After installing dependencies, follow the steps below

### 1. Set up Environment Variables

Rename the following files:

- `.env.sample` -> `.env`

### 2. Run migration

Now that you're all setup, run the migration and move to start frontend!

```shell
pnpm prisma:migrate && pnpm prisma generate
```

### 3. Start frontend dev server

Now that you're all setup, start the frontend dev server and get to work!

```shell
pnpm dev
```

Build something great!

## Deployment

TBD

## How to fix

- Sometime getPosts request does not have the exact Backend URL so you need to create `.env.local` and add `BASE_URL=http://localhost:3000`