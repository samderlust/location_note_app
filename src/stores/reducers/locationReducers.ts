import { locationActions } from './../types/locationTypes';
import { ILocationAction, ILocationReducers } from '../types';
const INIT_STATE: ILocationReducers = {
  allLocations: [],
  error: '',
  currentLocation: null,
  isCreating: false
};
export const locationReducer = (
  state: ILocationReducers = INIT_STATE,
  action: ILocationAction
): ILocationReducers => {
  switch (action.type) {
    case locationActions.SET_ALL_LOCATIONS:
      return { ...state, allLocations: action.data };
    case locationActions.SET_ERROR_MESSAGE:
      return { ...state, error: action.data };
    case locationActions.SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.data };
    case locationActions.SET_IS_CREATING:
      return { ...state, isCreating: action.data };
    default:
      return state;
  }
};
