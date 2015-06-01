import localStorage from 'localStorage';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

let _user = {};
let _error = '';

let UserStore = AppDispatcher.createStore({
  accessToken() {
    return _user.accessToken;
  },
  error() {
    return _error;
  },
  save(user) {
    _error = '';
    _user = user;

    localStorage.setItem('user:authenticate', true);
    localStorage.setItem('user:accessToken', _user.accessToken);
  },
  isAuthenticate() {
    return this.storage.getItem('user:authenticate');
  }
}, function ({actionType, error, user}) {
  switch(actionType) {
    case ActionTypes.LOGIN_SUCCESS:
      UserStore.save(user);
      break;

    case ActionTypes.LOGIN_FAIL:
      _error = error;
      break;

    default:
      return true;
  }

  UserStore.emitChange();
  return true;
});

export default UserStore;
