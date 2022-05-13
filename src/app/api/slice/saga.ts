import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { portfolioDataActions as actions } from '.';

function* doSomething() {
  yield delay(500);
  const requestURL = `https://raw.githubusercontent.com/Elunir/Portfolio-JSON/main/db.json`;
  // return fetch(requestURL)
  //   .then(res => res.json())
  //   .then(data =>
  //     actions.dataLoaded({
  //       payload: {
  //         name: 'idris',
  //       },
  //     }),
  //   )
  //   .catch(err => console.log(err));
  try {
    // Call our request helper (see 'utils/request')
    const data: {} = yield call(request, requestURL);
    if (data) {
      yield put(actions.dataLoaded(data));
    }
  } catch (err: any) {
    if (err.response?.status === 404) {
      console.log('Error: 404');
    } else {
      console.log('Error:', err);
    }
  }
}
export function* portfolioDataSaga() {
  yield takeLatest(actions.loadData.type, doSomething);
}
