var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.js', ['bundle']);
});

gulp.task('sass', function() {
  return gulp.src('app/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/assets/css/'))
    .pipe(livereload());
});

gulp.task('bundle', function() {
  return gulp.src('app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('app'))
    .pipe(livereload());
});
