import { combineReducers } from 'redux';

import {
    appLoading,
} from './ui';
import {
    app,
    nav,
    auth,
    user_reducer,
} from './app';

import {
} from './domain';


export default combineReducers({
    ui: combineReducers({
        appLoading,
    }),
    app,
    nav,
    auth,
    user: combineReducers({
      user_reducer,
    }),
});
