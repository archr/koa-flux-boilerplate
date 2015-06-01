import request from 'superagent';
import Promise from 'bluebird';
import debug from 'debug';
import config from '../config';
import UserStore from '../stores/UserStore';

let debug = require('debug')('app:APIApp');

class APIApp {
  constructor(url) {
    this.url = url;
  }

  go(endpoint, options, method='post') {
    let url = this.url + endpoint;

    debug(`go: ${method} ${url}`);

    return new Promise(function (resolve, reject) {
      let req = request[method](url).set('Content-type', 'application/json');

      if (UserStore.accessToken()) {
        req = req.set('Authorization', `Bearer ${UserStore.accessToken()}`);
      }

      if (options) {
        req = req.send(options);
      }

      req.end(function (err, res) {
        if (err) {
          debug(`error: ${err.message}`);
          return reject(err.message);
        }

        if (res.status !== 200) {
          debug(`error: ${res.text}`);
          return reject(res.body || res.text);
        }

        return resolve(res.body);
      });
    });
  }
}

export default new APIApp(config.api);
