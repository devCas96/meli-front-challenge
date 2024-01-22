# MELI FRONT CHALLENGE

Challenge focused on build a small clone of Meli AR with results page and product detail page.

## Table of Contents

- [Installation](#installation--dev-server)
- [Technical decisions](#technical-decisions)
- [Preview](#preview)

## Installation & dev server

```bash
    git clone git@github.com:devCas96/meli-front-challenge.git && cd meli-front-challenge
    pnpm install
    pnpm next dev
```

## Available commands

### End to end tests

```bash
    pnpm exec playwright test         # Execute e2e tests and wait for results
    pnpm exec playwright show-report  # Show result of e2e tests ordered by browser (Chromium, Firefox, Webkit)
    pnpm exec playwright test --ui    # Tool for help with the debugging of e2e tests
    pnpm exec playwright codegen      # Tool for generate code of meli-front-challenge focused on e2e

```

## Technical decisions

### NEXTJS

- NextJS was the best suitable option for this project because need to take advantage of **SSR**, **performance**, and **SEO**.
- NextJS components are server components by default but also we can have client components and our **Header** is an excellent example of a client component
- NextJS provides a way to handle our owns APIs throught **API Routes**.
- NextJS v14 also provides features with **App router** to have a best page handlers including **loadings** (skeleton approach here), **layouts**, **errors**.

### PLAYWRIGHT

- As we can see upper, Playwright provides a powerful group of tools to write concise and efficent e2e tests.

### 📝NOTES

- **Atomic Design** (focused on reusability and to compose big components by smaller ones).
- **Home page component** empty because Home needs to render just the root layout that contains the header.
- **Header component** is a client component and it allows us to have a check before send the search input value to server.
- **Loading components** implementing skeleton by page.
- **Cloudinary CDN** used for fast delivery icons and resources from client. (the only env value in this project is the Cloudinary id).
- Server images with **next/image**.
- Meli endpoints added to **constants** and not to **env** because are public resources and there aren't reasons to protect them.
- **Dynamic Error Component** implemented for receive any kind of error and render a message.
- **Accesibility** improved with aria attributes.
- **Conventional commits** implemented to have clear commits and follow the best practices.
- **PNPM** as default package manager.

## Preview

### Desktop

![DESKTOP_RESULTS_SKELETON](https://res.cloudinary.com/dl3fkvqxz/image/upload/v1705944919/MELI/screenshots/cldi9qj4kxtmlldopzzd.png)
![DESKTOP_RESULTS](https://res.cloudinary.com/dl3fkvqxz/image/upload/v1705944919/MELI/screenshots/tznrixhswzrsgbsjvk7x.png)
![DESKTOP_DETAIL_SKELETON](https://res.cloudinary.com/dl3fkvqxz/image/upload/v1705944919/MELI/screenshots/f0mbw4pyo2dxyjy0vnjl.png)
![DESKTOP_DETAIL](https://res.cloudinary.com/dl3fkvqxz/image/upload/v1705944919/MELI/screenshots/pav1kztic0njqllhfat8.png)

-------------------------------------

### Mobile

![MOBILE_RESULTS_SKELETON](https://res.cloudinary.com/dl3fkvqxz/image/upload/v1705944919/MELI/screenshots/wvrsfhiafn9uxt7uejsj.png)
![MOBILE_RESULTS](https://res.cloudinary.com/dl3fkvqxz/image/upload/v1705944919/MELI/screenshots/kv0y9aqlb7qewz44gsje.png)
![MOBILE_DETAIL](https://res.cloudinary.com/dl3fkvqxz/image/upload/v1705944919/MELI/screenshots/pmm50zlpezsjsmcmfzor.png)

-------------------------------------
