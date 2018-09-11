var gulp       = require('gulp');
var fs         = require('fs');
var coffeelint = require('gulp-coffeelint');
var concat     = require('gulp-concat');
var rename     = require('gulp-rename');
var watch      = require('gulp-watch');
var coffee     = require('gulp-coffee');

// Configuration
var coffeeFiles  = './src/*.coffee';
var distFolder   = './AddressFinder/Widget/view/frontend/web/js';
var distFileName = 'addressfinder_magento.js';

gulp.task('default', ['lint', 'concat', 'js-watch'], function() {
  // place code for your default task here
  console.log('Build complete');
});

gulp.task('production', ['lint', 'concat'], function() {
  // place code for your default task here
  console.log('Build complete');
});

gulp.task('lint', function() {
  gulp.src(coffeeFiles)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeelint.reporter('fail'));
});

gulp.task('concat', function() {
  return gulp.src(coffeeFiles)
    .pipe(coffee({bare: true}))
    .pipe(concat(distFileName))
    .pipe(gulp.dest(distFolder));
});

gulp.task('js-watch', function() {
  return watch(coffeeFiles, function(){
    console.log('Watch triggered');
    gulp.src(coffeeFiles)
      .pipe(coffee({bare: true}))
      .pipe(concat(distFileName))
      .pipe(gulp.dest(distFolder));
  });
});
