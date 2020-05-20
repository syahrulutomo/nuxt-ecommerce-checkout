# jackmall-beta

> Beta apps

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Tech Stacks
1. Nuxt --> Framework
2. Stylus --> CSS preprocessor
3. Eslint & Prettier --> Linter
4. Vuex --> state management
5. Vuex Persistedstate --> caching state
6. Vee-validate --> form validation
7. Nuxt/toast --> Alert
8. lodash --> utility tools

## Description

### Components
This app only contain 1 page, and using stepper change its content. 
It use container component to set the page layout then fill the slot with components.
The components, is divided into 3 parts: base, form, and list.
The base components only responsible for one task. The list components only responsible for rendering data.
The form components, is container of base and list.
Then the container component is responsible for wrapping all of these components.

### State Management
This app use Vuex for managing state. Since it doesn't consume data from API, so it use direct mutations for modifying state. It also use Vuex-persistedstate for store the state into localstorage.

