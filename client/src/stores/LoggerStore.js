import AppDispatcher from '../dispatcher/AppDispatcher';

let debug = require('debug')('app:LoggerStore');

export default AppDispatcher.createStore({},
  function (payload){
    let { actionType } = payload;
    delete payload.actionType;

    debug(`${actionType}`, payload);
  }
);
