import * as CompressionPlugin from 'compression-webpack-plugin';
import * as BrotliPlugin from 'brotli-webpack-plugin';
import * as packageJson from './package.json';
import type { Module } from '@nuxt/types';

const defaultGzipOptions = {
  test: /\.(js|css|html|svg)$/,
};

const compressionModule: Module = function () {
  this.extendBuild((config, { isDev }) => {
    if (isDev) {
      return;
    }

    const options = this.options['nuxt-compress'];

    const gzipConfig = options
      ? {
          ...defaultGzipOptions,
          ...options.gzip,
        }
      : defaultGzipOptions;

    const brotliConfig = options && options.brotli ? options.brotli : {};

    config.plugins!.push(
      new CompressionPlugin(gzipConfig),
      new BrotliPlugin(brotliConfig) as any,
    );
  });
};

export const meta = packageJson;
export default compressionModule;
