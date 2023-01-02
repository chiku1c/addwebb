import { combineReducers } from 'redux';
import userReduser from './Reduser';

const rootreduser=combineReducers({
    users :userReduser
})

export default rootreduser