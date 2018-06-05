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
    pleeease = require('gulp-pleeease');


var PleeeaseOptions = {
    "rem": true,
    "opacity": true,
    "pseudoElements": true
    };

gulp.task('sass', function() {
    return gulp.src('assets/stylesheets/sass/')
        .pipe(sass()
          .on('error', sass.logError))
        .pipe(pleeease(PleeeaseOptions))
        .pipe(gulp.dest('assets/stylesheets/'));
});

gulp.task('lint', function() {
    return gulp.src('assets/js/vue/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
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

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 8001,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('/assets/js/vue/*.js', ['scripts']);
  gulp.watch('/assets/stylesheets/sass/*.scss', ['sass']);
});

gulp.task('build', ['sass', 'watch']);
gulp.task('default', ['build', 'watch', 'connect']);
