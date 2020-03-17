import { setIsCreating } from './../actions/';
import {
  setAllLocations,
  setErrorMessage,
  setCurrentLocation
} from '../actions';
import {
  ISetAllLocationActions,
  ICreateNewLocation,
  IGetLocationById,
  ISetErrorMessage,
  IGetAllLocationsActions,
  locationActions
} from '../types';
import {
  fetchAllLocations,
  fetchCreateLocation,
  fetchLocationById
} from '../../api/locationApi';

import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchAllLocationsSaga(action: IGetAllLocationsActions) {
  try {
    const res = yield call(fetchAllLocations);
    yield put<ISetAllLocationActions>(setAllLocations(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* createNewLocationSaga(action: ICreateNewLocation) {
  setIsCreating(true);
  try {
    yield call(fetchCreateLocation, action.data);
    yield put(action.history.push('/'));
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.error.message);
      const err = error.response.data.error.message;
      yield put<ISetErrorMessage>(setErrorMessage(err));
    }
  }
  setIsCreating(false);
}

function* getLocationByIdSaga(action: IGetLocationById) {
  yield put(setCurrentLocation(undefined));
  try {
    const res = yield call(fetchLocationById, action.data);
    const Location = res.data;
    yield put(setCurrentLocation(Location));
  } catch (error) {
    console.log(error);
    yield put(setCurrentLocation(null));
  }
}
export function* watchLocationSagas() {
  yield takeLatest(locationActions.GET_ALL_LOCATIONS, fetchAllLocationsSaga);
  yield takeLatest(locationActions.CREATE_A_LOCATION, createNewLocationSaga);
  yield takeLatest(locationActions.GET_LOCATION_BY_ID, getLocationByIdSaga);
}
