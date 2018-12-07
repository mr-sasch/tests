// Gulp
var gulp = require('gulp');

// Stylus
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('styl', function () {
  return gulp.src('app/styles/style.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets/'));
});

// Pug
var pug = require('gulp-pug');
gulp.task('pug', function() {
  return gulp.src('app/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('dist/'))
});

// Watch
var watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch('app/**/*.styl', ['styl']);
  gulp.watch('app/**/*.pug', ['pug']);
});


// Только текущий файл
var pugCur = require('gulp-pug');
gulp.task('pugCur', function() {
  return gulp.src('app/pages/in-progress/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('dist/'))
});
gulp.task('cur', function() {
  gulp.watch('app/**/*.styl', ['styl']);
  gulp.watch('app/pages/in-progress/*.pug', ['pugCur']);
});
