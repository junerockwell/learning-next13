# Learning Next13

At the time of this work, the latest version of NextJS is 14. But I found this very straightfoward book, [NextJS 13 and React Crash Course: Build a Full Stack NextJS 13 App with React, Tailwind and Prisma backend](https://www.amazon.com/dp/B0CGFBCMZW?ref=ppx_yo2ov_dt_b_fed_asin_title) that I can follow along to understand Next 13.

I needed to do this because of the SSR default from Next 13 and up. It's a little dizzying that `useState`, `useEffect`, etc. are only client side. There are other ways to overwrite some components to be only be client side because if you use, for example, localStorage, we'll get an error.

Next 13 and up enables us to make API route endpoints as well.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

This app has not been deployed to Vercel or Render or any other place yet.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
