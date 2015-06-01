/*eslint-disable no-var */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
  var options = {
    script: 'index.js',
    ignore: ['.git', 'node_modules/*'],
    execMap: {
      js: 'babel-node --harmony'
    },
    ext: 'js'
  };

  return nodemon(options);
});
