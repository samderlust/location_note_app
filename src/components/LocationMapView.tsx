import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { StoreState } from '../stores/reducers';
import { LocationMarker } from './Marker';

const G_KEY = process.env.REACT_APP_GOOGLE_API_KEY as string;

interface ILocationMapViewProps {}

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
          lat: 45.2487862,
          lng: -76.3606792
        }}
        defaultZoom={6}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        {allLocations.map(location => (
          <LocationMarker
            lat={location.latitude}
            lng={location.longitude}
            key={location.id}
            location={location}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = (state: StoreState): StateProps => state;

export const LocationMapView = connect(mapStateToProps, {})(_LocationMapView);
