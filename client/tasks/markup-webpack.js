/*eslint-disable no-var */

var gulp = require('gulp');
var rename = require('gulp-rename');

module.exports = function () {
  return gulp.src('./www/webpack.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./build'));
};
