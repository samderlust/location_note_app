import { Action } from 'redux';

export enum locationActions {
  GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS',
  SET_ALL_LOCATIONS = 'SET_ALL_LOCATIONS',
  CREATE_A_LOCATION = 'CREATE_A_LOCATION',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
  GET_LOCATION_BY_ID = 'GET_LOCATION_BY_ID',
  SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION',
  DELETE_A_LOCATION = 'DELETE_A_LOCATION',
  SET_IS_CREATING = 'SET_IS_CREATING'
}

export interface ILocationReducers {
  allLocations: ILocation[];
  error: string;
  currentLocation: ILocation | null | undefined;
  isCreating: boolean;
}

export interface ILocation {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export interface IGetAllLocationsActions extends Action {
  type: locationActions.GET_ALL_LOCATIONS;
}

export interface ISetAllLocationActions extends Action {
  type: locationActions.SET_ALL_LOCATIONS;
  data: ILocation[];
}

export interface ICreateNewLocation extends Action {
  type: locationActions.CREATE_A_LOCATION;
  data: ILocation;
  history: any;
}

export interface ISetErrorMessage extends Action {
  type: locationActions.SET_ERROR_MESSAGE;
  data: string;
}
export interface IGetLocationById extends Action {
  type: locationActions.GET_LOCATION_BY_ID;
  data: number;
}

export interface ISetCurrentLocation extends Action {
  type: locationActions.SET_CURRENT_LOCATION;
  data: ILocation | null | undefined;
}

export interface ISetIsCreating extends Action {
  type: locationActions.SET_IS_CREATING;
  data: boolean;
}

export interface IDeleteLocation extends Action {
  type: locationActions.DELETE_A_LOCATION;
  data: number;
}

export type ILocationAction =
  | IGetAllLocationsActions
  | ISetAllLocationActions
  | ICreateNewLocation
  | IGetLocationById
  | ISetCurrentLocation
  | ISetIsCreating
  | IDeleteLocation
  | ISetErrorMessage;
