import keyMirror from 'react/lib/keyMirror';

export default {
  ActionTypes: keyMirror({
    LOGIN: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAIL: null,

    LOGOUT: null,

    LOAD_USER_DATA: null,
    LOAD_USER_DATA_SUCCESS: null,
    LOAD_USER_DATA_FAIL: null
  })
};
