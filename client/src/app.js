import React from 'react';
import debug from 'debug';
import router from './router.jsx';

require('./stores/LoggerStore');

window.React = React;
window.debug = debug;

require('!style!css!less!./../less/app.less');

router.run(function (Handler) {
  console.log('run');
  React.render(<Handler />, document.body);
});
