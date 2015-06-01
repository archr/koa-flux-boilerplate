/*eslint-disable no-var */

var webpack = require('webpack');
var config = require('../webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

module.exports = function () {
  var compiler = webpack(config);

  new WebpackDevServer(compiler, {
    hot: true,
    publicPath: config.output.publicPath
  })
  .listen(8090, 'localhost', function (err) {
      if(err) {
        console.log(err);
      }
  });
};

module.exports.dependencies = ['markup-webpack'];
