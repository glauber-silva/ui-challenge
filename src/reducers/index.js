import { combineReducers } from 'redux';
import { userReducer } from './user';
import { hostReducer } from './web';

const rootReducer = combineReducers({
    user: userReducer,
    web: hostReducer
});

export default rootReducer;