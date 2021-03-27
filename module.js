const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

module.exports = compressionModule;
module.exports.meta = require('./package.json');

function compressionModule() {
  this.extendBuild((config, { isDev }) => {
    if (isDev) {
      return;
    }

    const options = this.options['nuxt-compress'] || {};
    const test = /\.(js|css|html|svg)$/;

    const gzipCompressionPlugin = new CompressionPlugin({
      test,
      algorithm: 'gzip',
      compressionOptions: { level: zlib.constants.Z_BEST_COMPRESSION },
      ...options.gzip,
    });

    const brotliCompressionPlugin = new CompressionPlugin({
      test,
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]:
            zlib.constants.BROTLI_MAX_QUALITY,
        },
      },
      ...options.brotli,
    });

    config.plugins.push(gzipCompressionPlugin, brotliCompressionPlugin);
  });
}
