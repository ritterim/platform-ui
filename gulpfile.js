const { src, dest, series, parallel } = require('gulp');
const autoprefixer = require("autoprefixer");
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const kss = require('kss');
const nano = require('cssnano');
const postcss = require("gulp-postcss");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const { watch } = require('gulp');

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
    .pipe(uglify())
    .pipe(dest('src/assets/js'))
    .pipe(dest('dist/js'))
    .pipe(connect.reload())
}

function styleguide() {
  return kss({
    source: 'src/assets/stylesheets/',
    destination: 'styleguide/',
    builder: 'custom-builder',
    css: 'kss-assets/kss.css'
  });
}

function watchFiles() {
  watch("./src/assets/stylesheets/sass/*", css);
  watch("./src/assets/js/src/*", js);
}

exports.build = parallel(series(css, styleguide), js);
exports.css = css;
exports.js = js;
exports.styleguide = styleguide;
exports.serve = serve;
exports.default = parallel(series(css, styleguide), js, serve, watchFiles);
