import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import APIApp from '../utils/APIApp';

function errorHandler(actionType) {
  return function (error) {
    if (error.status === 401) {
      return {
        actionType: ActionTypes.LOGOUT
      };
    }

    return {
      actionType: actionType,
      error: error.message
    };
  };
}

export default AppDispatcher.createActions({
  login(options) {
    return APIApp
      .go('/sessions', options)
      .then(function (user) {
        return {
          user,
          actionType: ActionTypes.LOGIN_SUCCESS
        };
      })
      .catch(errorHandler(ActionTypes.LOGIN_FAIL));
  }
});

