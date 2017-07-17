import { combineReducers } from 'redux';
import { userReducer } from './user';
import { hostReducer } from './host';

const rootReducer = combineReducers({
    user: userReducer,
    host: hostReducer
});

export default rootReducer;