/**
 * Created by sandeepj on 19/6/17.
 */
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
    users:UserReducer,
    activeUser: ActiveUserReducer
})
export default allReducers;