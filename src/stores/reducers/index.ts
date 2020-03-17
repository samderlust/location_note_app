import { locationReducer } from './locationReducers';
import { ILocationReducers } from '../types';
import { combineReducers } from 'redux';

export interface StoreState {
  locationReducer: ILocationReducers;
}
const rootReducer = () =>
  combineReducers<StoreState>({
    locationReducer
  });

export default rootReducer;
