# nuxt-compress

![License: MIT](https://img.shields.io/npm/l/nuxt-compress.svg?style=for-the-badge)
![npm download count](https://img.shields.io/npm/dt/nuxt-compress.svg?style=for-the-badge)
![Dependency status for latest release](https://img.shields.io/librariesio/release/npm/nuxt-compress.svg?style=for-the-badge)
![Vulnerability count from Snyk](https://img.shields.io/snyk/vulnerabilities/npm/nuxt-compress.svg?style=for-the-badge)

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

2. Add the module to your `nuxt.config.js`

   ```js
   module.exports = {
     modules: ["nuxt-compress"]
   };
   ```

## Configuration

This module provides a simple interface to include
[brotli-webpack-plugin](https://github.com/mynameiswhm/brotli-webpack-plugin)
and
[compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin)
and uses the same configuration options, which can be supplied as a
second argument to the entry in `"modules"` in your `nuxt.config.js`, or as
a distinct entry with the key `"nuxt-compress"`. See the
[Nuxt Modules guide](https://nuxtjs.org/guide/modules/) for more information.

For example:

```js
module.exports = {
  modules: [
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ]
};
```

OR

```js
module.exports = {
  modules: ["nuxt-compress"],
  "nuxt-compress": {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  }
};
```
