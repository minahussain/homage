# Homage a Black Style Digital Archive

![Screenshot of App](/assets/app-entry-page.png)

A Next.js + React app to archive Black style in entertainment spaces and processes them using AI to categorize and describe styles.


## Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Initially, this used primsa for database, to run the database server:

```bash
npx prisma studio
# format schema
npx prisma format
# synchronize schema
npx prisma db push
```

But now it pulls content from Prismic.io, a headless CMS.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Tech

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Authentication

[Clerk](https://clerk.dev/)

### ORM vs Headless

I created a local database to quickly get started with the app using prisma and postgresql. 

I decided to switch over and use a headless CRM to pull content from - so that someone could later add data using the Prismic UI at a later point and not have to be an engineer by any means.

### OpenAI and Langchain

Langchain and zod made it pretty easy for me to interact with OpenAI because with our Next.js app, it'll run server side in node. 

First, use `StructuredOutputParser` and zod to create a schema of instructions to feed to OpenAI. That will be passed to Langchain's prompt template that will be used to ask the language model for an answer. Then, format that answer into the data structure we want.


## Background

There are a number of Black creatives who have taken the initiative to document Black fashion - many using social media to catalog and spread awareness of Black culture and it’s impact on society from past to present day: archivealive by Tianni Janae', Black Fashion Fair by Antoine Gregory, and Black Fashion Archive by Rikki Byrd. However the social media accounts aren't optimal to search through, leaving users scrolling through the accounts for inspiration.

Read more about the [UI/UX process](https://www.attnhussain.com/project/black-style-archive---search).