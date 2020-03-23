import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { StoreState } from '../stores/reducers';
import { LocationMarker } from './Marker';
import { ILocation } from '../stores/types';

const G_KEY = process.env.REACT_APP_GOOGLE_API_KEY as string;

interface ILocationMapViewProps {
  showDetail(): void;
  setCurrentLocation: Function;
}

interface StateProps extends StoreState {}

const _LocationMapView = (props: ILocationMapViewProps & StateProps) => {
  const {
    locationReducer: { allLocations }
  } = props;

  return (
    <div
      style={{
        height: 700,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden'
      }}
    >
      <GoogleMapReact
        options={{
          fullscreenControl: false,
          gestureHandling: 'greedy'
        }}
        bootstrapURLKeys={{ key: G_KEY }}
        defaultCenter={{
          lat: 45.3770557,
          lng: -75.6931054
        }}
        defaultZoom={9}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        {allLocations.map(location => (
          <LocationMarker
            lat={location.latitude}
            lng={location.longitude}
            key={location.id}
            location={location}
            showDetail={props.showDetail}
            setCurrentLocation={() => props.setCurrentLocation(location)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = (state: StoreState): StateProps => state;

export const LocationMapView = connect(mapStateToProps, {})(_LocationMapView);
