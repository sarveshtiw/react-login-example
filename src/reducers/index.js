// This file is used for combine all reducers
import { combineReducers } from 'redux';
import login from './login'
import auth from './authentication'

export default combineReducers({
    login,
    auth
})
