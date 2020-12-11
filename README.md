# Next.js blog

Blog with a simple comments section.


### Running the front-end

Rename the `.env.test` file to `.env` and store the environment variables that Next and Sanity will use to pull data from the Sanity API. You can get or create the tokens, ids, and secrets from [manage.sanity.io](https://manage.sanity.io).

Once those env variables are ready, you can run the following commands to get Next's development server up and running:

```bash
npm install

# Run the frontend
npm run dev

# Run the Studio
npm run start:sanity
```

The blog will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.
=======
This site is built using the following:
- [Sanity](https://www.sanity.io/)'s Headless CMS.
- [Next.js](https://nextjs.org/) React Framework
- [Tailwind CSS](https://tailwindcss.com/) CSS Framework