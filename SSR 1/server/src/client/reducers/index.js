import { combineReducers } from 'redux';
import usersReducers from './usersReducers'
import authReducer from './authReducer';
import adminReducers from './adminReducers';

export default combineReducers({
    users: usersReducers,
    auth: authReducer,
    admins: adminReducers
});