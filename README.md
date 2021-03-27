# nuxt-compress

A simple static asset compression module for Nuxt that runs Gzip and Brotli
compression during the build process.

This is significantly more efficient than compressing files on the fly,
especially for Brotli compression, which sacrifices CPU time for greater
compression.

For compression during runtime, see the `compressor` entry in the
[Nuxt configuration docs](https://nuxtjs.org/api/configuration-render/#compressor)

## Getting Started

1. Install the module

   ```console
   npm install nuxt-compress
   ```

   OR

   ```console
   yarn add nuxt-compress
   ```

2. Add `"nuxt-compress"` to your
   [`buildModules`](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules#buildmodules)

   ```js
   module.exports = {
     buildModules: ['nuxt-compress'],
   };
   ```

   If you're using Nuxt < 2.9, you'll need to add it to your `modules` instead

   ```js
   module.exports = {
     modules: ['nuxt-compress'],
   };
   ```

## Configuration

This module provides a simple interface to include
[brotli-webpack-plugin](https://github.com/mynameiswhm/brotli-webpack-plugin)
and
[compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin)
and uses the same configuration options, which can be supplied as a second
argument to the entry in `"modules"` in your `nuxt.config.js`, or as a distinct
entry with the key `"nuxt-compress"`. See the
[Nuxt Modules guide](https://nuxtjs.org/guide/modules/) for more information.

For example:

```js
module.exports = {
  modules: [
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],
};
```

OR

```js
module.exports = {
  modules: ['nuxt-compress'],
  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },
};
```
