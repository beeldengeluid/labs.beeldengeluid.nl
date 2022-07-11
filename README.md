# B&G Labs Website

Welcome to the online home of Sound & Vision Labs (B&G Labs in Dutch).

## Prerequisites

- [Node.js installed](https://nodejs.org/en/download/) (Vercel currently uses v14 for deployments, so that version is recommended for local development)
- [Modern version of Yarn installed](https://yarnpkg.com/getting-started/install)

## Ingredients

- [Nuxt.js](https://nuxtjs.org)
- [Forestry CMS](https://forestry.io/)
- Datasets from [DataCatalog](https://data.beeldengeluid.nl/id/datacatalog/0001), fetched during build

## Development Setup

The following commands require [Node.js](https://nodejs.org/) and NPM (ships with Node) to be installed globally.

NB: we've switched from Yarn to NPM after encountering [issues](https://github.com/yarnpkg/berry/issues/3416#issuecomment-932397620) with dependabot updates.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# fetch latest datacatalog in JSON-LD format
$ npm run fetch

# generate static project (includes fetch)
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deployment

This project uses [Vercel for Github](https://vercel.com/docs/concepts/git/vercel-for-github), enabling automatic production deployments on every push to the `main` branch. Any other pushes and PRs get their own atomic preview deployments on a unique URL.
