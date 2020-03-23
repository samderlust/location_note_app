import { IDeleteLocation } from './../types/locationTypes';
import { ILocation } from '../types/locationTypes';
import {
  ISetAllLocationActions,
  ICreateNewLocation,
  ISetErrorMessage,
  ISetCurrentLocation,
  IGetLocationById,
  ISetIsCreating
} from '../types/locationTypes';
import {
  IGetAllLocationsActions,
  locationActions
} from '../types/locationTypes';
export const getAllLocations = (): IGetAllLocationsActions => ({
  type: locationActions.GET_ALL_LOCATIONS
});

export const setAllLocations = (
  locations: ILocation[]
): ISetAllLocationActions => ({
  type: locationActions.SET_ALL_LOCATIONS,
  data: locations
});

export const createNewLocation = (
  location: ILocation,
  history: any
): ICreateNewLocation => ({
  type: locationActions.CREATE_A_LOCATION,
  data: location,
  history
});
export const setErrorMessage = (msg: string): ISetErrorMessage => ({
  type: locationActions.SET_ERROR_MESSAGE,
  data: msg
});

export const getLocationById = (id: number): IGetLocationById => ({
  type: locationActions.GET_LOCATION_BY_ID,
  data: id
});

export const setCurrentLocation = (
  location: ILocation | null | undefined
): ISetCurrentLocation => ({
  type: locationActions.SET_CURRENT_LOCATION,
  data: location
});

export const setIsCreating = (isCreating: boolean): ISetIsCreating => ({
  type: locationActions.SET_IS_CREATING,
  data: isCreating
});

export const deleteALocation = (id: number): IDeleteLocation => ({
  type: locationActions.DELETE_A_LOCATION,
  data: id
});
