import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from 'src/services/api';
import {
  Creators as listActions,
  Types as listTypes,
} from 'src/store/ducks/list';

function* asynFn(action) {
  try {
    const {param} = action.payload;
    const response = yield call(api.get, `/users/${param}/repos`); // call is used to invoke functions that has a promise as return
    console.tron.log(response.data);
    yield put(listActions.changeList(response.data)); // put is used to dispatch an action
  } catch (err) {}
}

export default function* rootSaga() {
  return yield all([
    takeLatest(listTypes.REQUEST_ITEM, asynFn), // action type and the function to invoke at that action
  ]);
}
