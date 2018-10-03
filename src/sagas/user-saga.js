import { take, call, put, race, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

import {
    SET_CURRENT_USER,
} from '../actions';

export const testOutput = (user) =>{

  user = {
    name: 'kevin',
    userId: 123
  }
  console.log("The user on testOutput ", user);
  return user;
}

export const fetchCurrentUser = (params) => {
  // Set url
  var baseURL = 'http://staging.api.dotgive.io/v1/authenticate';
  console.log("The data on sendData Service ", baseURL, params);
  // Post to endpoint
  axios.post(baseURL, params)
  .then(res =>{
    console.log("The response on fetchCurrentUser \n\n", res.data);
    return res.data;
  })
  .catch(err => console.log(err))
}


/**
 * Current User retrieval
 */
export const getCurrentUser = function* getCurrentUser(action) {
  try {
    const user =  yield call(fetchCurrentUser, action.payload);
    yield put({type: "SET_USER_SUCCEEDED", user: user});
  } catch (e) {
   yield put({type: "SET_USER_FAILED", message: e.message});
  }
}
