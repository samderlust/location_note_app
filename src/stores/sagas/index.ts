import { all, fork } from 'redux-saga/effects';
import { watchLocationSagas } from './locationSagas';

export default function* rootSaga() {
  yield all([watchLocationSagas()]);
}
