import { ILocation } from '../stores/types';
import axios, { AxiosInstance } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3031/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export const fetchAllLocations = (): Promise<AxiosInstance> =>
  instance.get('/locations');
export const fetchLocationById = (id: number): Promise<AxiosInstance> =>
  instance.get(`/location/${id}`);
export const fetchCreateLocation = (
  location: ILocation
): Promise<AxiosInstance> => instance.post('/location', location);
