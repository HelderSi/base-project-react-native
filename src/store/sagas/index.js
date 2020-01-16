import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from 'src/services/api';
import * as listActions from 'src/store/actions/list';

function* asynFn(action) {
  try {
    const {param} = action.payload;
    const result = yield call(api.get, `/users/${param}`); // call is used to invoke functions that has a promise as return
    console.tron.log(result);
    yield put(listActions.add(result.data.login)); // put is used to dispatch an action
  } catch (err) {}
}

export default function* rootSaga() {
  return yield all([
    takeLatest('REQUEST_ITEM', asynFn), // action type and the function to invoke at that action
  ]);
}
