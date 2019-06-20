const { src, dest, series, parallel } = require('gulp');
const autoprefixer = require("autoprefixer");
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const kss = require('kss');
const nano = require('cssnano');
const postcss = require("gulp-postcss");
const sass = require('gulp-sass');
const { watch } = require('gulp');

function copyFontAwesomeSCSS() {
   return src('node_modules/@fortawesome/fontawesome-pro/scss/*')
     .pipe(dest('src/assets/stylesheets/sass/fontawesome'))
}

function copyFontAwesomeFonts() {
   return src('node_modules/@fortawesome/fontawesome-pro/webfonts/*')
     .pipe(dest('src/assets/webfonts/'))
     .pipe(dest('dist/webfonts'))
 }

function serve() {
  connect.server({
    root: './',
    port: 8001,
    livereload: true
  });
}

function css() {
  return src('src/assets/stylesheets/sass/main.scss')
    .pipe(sass())
    .pipe(concat('platform-ui.min.css'))
    .pipe(postcss([autoprefixer(), nano()]))
    .pipe(dest('src/assets/stylesheets/'))
    .pipe(dest('dist/'))
    .pipe(connect.reload())
}

function js() {
  return src('src/assets/js/src/*.js')
    .pipe(concat('platform-ui.min.js'))
    .pipe(dest('src/assets/js'))
    .pipe(dest('dist/js'))
    .pipe(connect.reload())
}

function styleguide() {
  return kss({
    source: 'src/assets/stylesheets/',
    destination: 'styleguide/',
    builder: 'custom-builder',
    css: '../src/assets/stylesheets/platform-ui.min.css'
  });
}

function watchFiles() {
  watch("./src/assets/stylesheets/sass/*", css);
  watch("./src/assets/js/src/*", js);
}

exports.css = css;
exports.js = js;
exports.styleguide = styleguide;
exports.serve = serve;
exports.build = parallel(copyFontAwesomeFonts, series(copyFontAwesomeSCSS, css));
exports.default = parallel(series(css, styleguide), js, serve, watchFiles);
