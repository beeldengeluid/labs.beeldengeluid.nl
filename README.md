# BenG Labs Website

Welcome to the online home of Sound & Vision Labs (BenG Labs in Dutch).

## Prerequisites

- [Node.js installed](https://nodejs.org/en/download/) (Vercel currently uses v14 for deployments, so that version is recommended for local development)
- [Modern version of Yarn installed](https://yarnpkg.com/getting-started/install)

## Ingredients

- [Nuxt.js](https://nuxtjs.org)
- [Forestry CMS](https://forestry.io/)
- Datasets from [DataCatalog](https://data.beeldengeluid.nl/id/datacatalog/0001), fetched during build

## Build Setup

The following commands require [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) to be installed globally.

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# fetch latest datacatalog in JSON-LD format
$ yarn fetch

# generate static project (includes fetch)
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deployment

This project uses [Vercel for Github](https://vercel.com/docs/concepts/git/vercel-for-github), enabling automatic production deployments on every push to the `main` branch. Any other pushes and PRs get their own atomic preview deployments on a unique URL.
