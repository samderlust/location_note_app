import React from 'react';
import { ILocation } from '../stores/types';
import { useHistory } from 'react-router-dom';

interface ILocationMarkerProps {
  lat: number;
  lng: number;
  location: ILocation;
  showDetail(): void;
  setCurrentLocation: Function;
}

export const LocationMarker = ({
  location,
  showDetail,
  setCurrentLocation
}: ILocationMarkerProps) => {
  const history = useHistory();

  return (
    <div
      style={{
        width: 40,
        height: 40,
        background: '#0097a9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ee5340',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: '50%',
        color: 'white',
        fontSize: '1.5em',
        wordWrap: 'break-word',
        overflow: 'hidden'
      }}
      onClick={() => {
        showDetail();
        setCurrentLocation();
      }}
    >
      {location.name}
    </div>
  );
};
