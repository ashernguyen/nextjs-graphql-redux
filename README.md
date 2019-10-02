akqa-coding-challenge
=====================

> A server-rendered React apps built with NextJs + Express.

- **Live demo**: https://akqa-coding-challenge.ashernguyen.site
- **Graphql playground**: https://akqa-coding-challenge-graphql.ashernguyen.site


## Challenge required

- Build with MV* framework
- Read data from JSON using https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3
- Responsive Layout
- Build dropdown filters from data
- Hide and show data depending on the dropdown filters


## Things you can find from this `akqa-coding-challenge` app

- Solved all [required challenges](#markdown-header-challenge-required)
- Fully built with Typescript to provide a strongly-typed code base from server to client
- Examples of state management with `redux` & `apollo-client` within React app. [Read more](#markdown-header-state-management)
- Example of building layout with 8 core UI components (`Box, Flex, Heading, Text, Button, Image, Link, Input`) that serve as the basis for design systems with responsive, themeable style props from `styled-system` & `styled-components`.
Check `storybook` for more detail.
- Better development workflow with `Storybook`. Check [Get started](#markdown-header-get-started) to learn how to run a local `storybook` server.
- Ensuring code quality with `Eslint`, `Prettier` and `Stylelint`.
- Examples of writing Jest unit tests for `redux`, `apollo-client`.
- Ready for production serverless deployment with [now](https://zeit.co/now)

## Key stacks

- **[TypeScript](https://www.typescriptlang.org/)**
- **[React](https://reactjs.org/)**
- **[Next.js](https://github.com/zeit/next.js)**
- **[Redux](https://github.com/reduxjs/redux)**
- **[Node.js](https://nodejs.org/)**
- **[ExpressJs](https://expressjs.com/)**
- **[Graphql](https://github.com/graphql/graphql-js)**
- **[Apollo-client](https://github.com/apollographql/apolloclient)**
- **[Styled-system](https://github.com/styledsystem/styledsystem)**
- **[Styled-components](https://www.styledcomponents.com/)**

## Project structure

The repository generally follows [Next.js](https://github.com/zeit/next.js) folder structure, except that the frontend source code is stored in the `client` subdirectory.
This makes it easier to search and replace text across multiple files as well as to run code quality checks.

```
.
├── client
│   ├── actions            Redux actions
│   ├── components         Core components, styled components, ...etc
│   ├── configs            Configs (styles, contants)
│   ├── containers         Redux store & graphql connectors
│   ├── graphql            Graphql queries & mutations
│   ├── reducers           Redux reducers
│   ├── selectors          Reselect selectors
│   ├── types              Shared typescript definition types
│   └── utils              Shared utilities
|
├── pages
│   ├── _app.tsx           Custom Nextjs <App>
│   ├── _document.tsx      Custom Nextjs <Document>
│   ├── index.tsx          Demo built with Redux + Redux-thunk
│   └── with-graphql.tsx   Demo built with Graphql + Apollo-client
|
├── server
│   ├── index.ts           Nextjs + Express server start file
│   └── tsconfig.json
|
├── static                 Nextjs static folder (images, manifest.json, ...etc)
|
├── stories                Storybook files
|
├── tests                  Jest unit test files
|
├── .babelrc               Babel config
├── .eslintrc              Eslint config
├── .eslintrc              Eslint config
├── .stylelintrc           Stylelint config
├── next.config.js         Custom nextjs config
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock

```

## Get started

#### Make sure you have the latest git, Node.js and Yarn installed on your machine

```bash
$ git --version

$ yarn --version

$ node --version
```

#### Clone the repo from Bitbucket

```bash
$ git clone git@bitbucket.org:kidjp1985/akqa-coding-challenge.git
```

#### Install npm package

```bash
$ cd akqa-coding-challenge && yarn
```

#### Run local dev server

```bash
$ yarn dev
```

#### Run local production build

```bash
$ yarn build && yarn start
```

#### Storybook

```bash
$ yarn storybook
```

#### Run Jest test

```bash
$ yarn test
```

#### Linting (eslint & stylelint)

```bash
$ yarn lint
```

#### Deploy to production with `now`

Make sure you have [now](https://github.com/zeit/now-cli) installed

```bash
$ yarn global add now
```

Then

```bash
$ now
```

## State management

There are 2 examples of state management in this app.

### 1.With Redux + Redux-thunk + Reselect

- Handle async API calls `(https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3)` with Redux-thunk.
- Fetch data once on server side and save in Redux store before initial page rendering.
- Change filtered options by dispatching Redux action.
- Use `reselect` to filter products based on current saved filtered option in Redux store.
- Local demo: `localhost:3000`

NOTE: Using `reselect` here doesn't give much benefit for optimization, but it's really useful in real world application . [Read more](https://github.com/reduxjs/reselect)

### 2.With Graphql + Apollo-client + Apollo-link-state

- Handle graphql query `(https://akqa-coding-challenge-graphql.ashernguyen.site/graphql)` with Apollo-client
- First graphql query is executed on the server side, and other queries are executed on the client side.
- Store fetched data with `Apollo-link-state`.
- Filtering products is done on graphql server by sending filter options as graphql query variables.
- `Apollo-client` caches data by `queries string` as `key`.
- Local demo: `localhost:3000/with-graphql`
- [Source code](https://bitbucket.org/kidjp1985/akqa-coding-challenge-graphql/src/master) for graphql micro server

