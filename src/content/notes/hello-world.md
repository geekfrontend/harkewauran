---
title: Hello, world
description: First note on the new site. What this place is for and how it's built.
date: 2026-10-08
tags: [meta]
---

This is the first note on the new harke.dev. I rebuilt the site from scratch: no admin panel, no database, just a handful of pages and a folder of Markdown files.

## What goes here

Notes are short write-ups of things I learned while building. Mostly notes to future me, but maybe useful to you too.

- slicing designs into real components
- small React and Next.js lessons
- the details that make an interface feel finished

## How it's built

The site is static, built with Astro and Tailwind CSS. Every note is a Markdown file in `src/content/notes/`, and publishing one is a single file away:

```md title="src/content/notes/hello-world.md"
---
title: Hello, world
date: 2026-10-08
tags: [meta]
---

This is the first note on the new harke.dev.
```

Code blocks get a filename and can highlight what matters:

```ts title="hello.ts"
// [!code word:world]
const greet = (name: string) => `hello, ${name}`;

greet("world");
```

That's it for now. More soon.
