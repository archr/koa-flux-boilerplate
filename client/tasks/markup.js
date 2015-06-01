/*eslint-disable no-var */

var gulp = require('gulp');

module.exports = function () {
  return gulp.src('./www/index.html')
    .pipe(gulp.dest('./build'));
};
