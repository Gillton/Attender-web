import { combineReducers } from 'redux';

import auth from './authReducer';
import classes from './classReducer';
import user from './userReducer';

export default combineReducers({
    auth,
    classes,
    user
});