/**
 * Created by sandeepj on 19/6/17.
 */
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
    users:UserReducer
})
export default allReducers;