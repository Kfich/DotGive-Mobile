import { take, call, put, race, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import { SET_CURRENT_USER,  } from '../actions';
import Services from '../api';

const fetchCurrentUser = () => {
  var auth = {
    email: 'stan@azula.co',
    password: 'azulaazula'
  }
  var baseURL = 'http://staging.api.dotgive.io/v1/authenticate';
  console.log("The data on sendData Service ", auth);
  axios.post(baseURL, auth)
  .then(res =>{
    return res.data;
  })
  .catch(err => console.log(err))
}

export function* getCurrentUser() {
  try {
    yield take(SET_CURRENT_USER);
    const currentUser = yield call(fetchCurrentUser); //1
    yield put({type: 'CURRENT_USER_LOADED', currentUser}); //2
  } catch(error) {
    yield put({type: 'CURRENT_USER_LOADED_FAILED', error});
  }
}
