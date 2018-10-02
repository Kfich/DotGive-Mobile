import { fork, takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
    LOAD_APP_RESOURCES,
    SET_CURRENT_USER
} from '../actions';

import {
    handleAppLoading,
} from './app_loading';

import {
    getCurrentUser,
} from './user-saga';


const root = function* root() {
    yield all([
      takeLatest(SET_CURRENT_USER, getCurrentUser),
      takeLatest(LOAD_APP_RESOURCES, handleAppLoading),
    ]);
}

export default root;
