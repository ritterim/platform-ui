// vite.config.js
const { defineConfig } = require('vite');
const path = require('path');
import banner from 'vite-plugin-banner';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
const pjson = require('./package.json');
const year = new Date().getFullYear();

const puiHeader = [
  '/*',
  '  Platform UI v' + pjson.version + ' | ' + pjson.name + '\n',
  '  ' + pjson.description + ' (' + pjson.homepage + ')',
  '  ©' + year + ' ' + pjson.author,
  '  ' + pjson.bugs.url,
  '  Released under the ' + pjson.license + ' license.',
  '*/',
  '',
].join('\n');

export default defineConfig({
  plugins: [banner(puiHeader)],
  css: {
    devSourceMap: true,
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'main.js')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'platform-ui.min.css';
          return assetInfo.name;
        },
        entryFileNames: 'js/platform-ui.min.js',
      },
    },
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'PlatformUI',
      formats: ['cjs']
    },
  },
});
