// Include gulp
var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    cachebust = require('gulp-cache-bust'),
    connect = require('gulp-connect'),
    babel  = require('gulp-babel'),
    concat = require('gulp-concat'),
    eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    kss = require('kss');


gulp.task('styleguide', ['sass'], function(){
    return kss({
      source: 'assets/stylesheets/',
      destination: 'styleguide/',
      builder: 'custom-builder',
      css: '../assets/stylesheets/main.css'
      });
  });

gulp.task('sass', function() {
    return gulp.src('assets/stylesheets/sass/main.scss')
        .pipe(sass()
          .on('error', sass.logError))
        .pipe(gulp.dest('assets/stylesheets'));
});

gulp.task('scripts', function() {
    return gulp.src('assets/js/vue/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {includeContent: true, sourceRoot: './'}))
        .pipe(gulp.dest('assets/js'));
});

gulp.src('*.html')
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest('.'));

gulp.task('connect', ['styleguide'], function() {
  connect.server({
    root: './',
    port: 8001,
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch('assets/stylesheets/sass/*.scss', ['styleguide']);
  gulp.watch('assets/js/vue/*.js', ['scripts']);
})

gulp.task('default', ['watch', 'connect']);
