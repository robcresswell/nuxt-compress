const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = compressionModule;
module.exports.meta = require("../package.json");

const gzip = {
  test: /\.(js|css|html|svg)$/
};

function compressionModule() {
  this.extendBuild((config, { isDev }) => {
    if (isDev) {
      return;
    }

    const options = this.options["nuxt-compress"];

    const gzipConfig = options
      ? {
          ...gzip,
          ...options.gzip
        }
      : gzip;

    const brotliConfig = options && options.brotli ? options.brotli : {};

    config.plugins.push(
      new CompressionPlugin(gzipConfig),
      new BrotliPlugin(brotliConfig)
    );
  });
}
