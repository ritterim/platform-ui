// const codepoint = require('./src/reserved-codepoints.json');
module.exports = {
  inputDir: './src/icons/optimized', // (required)
  outputDir: './public', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['html', 'json', 'css'],
  prefix: 'pi',
  tag: 'i',
  name: 'platform-icons',
  fontHeight: 300,
  normalize: true,
  templates: {
    css: './src/templates/css.hbs'
  },
  // codepoints: codepoint
};