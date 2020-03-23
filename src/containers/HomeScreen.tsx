import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllLocations, deleteALocation } from '../stores/actions';
import { StoreState } from '../stores/reducers';
import { Container, Typography, ButtonGroup, Button } from '@material-ui/core';
import { LocationTable } from '../components/LocationTable';
import { LocationAppBar } from '../components/LocationAppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { LocationMapView } from '../components/LocationMapView';
import { LocationModal } from '../components/LocationModal';
import { ILocation } from '../stores/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      background: '#fff',
      alignItems: 'center'
    },
    header: {
      textAlign: 'center'
    },
    buttonGroup: {
      marginBottom: 10
    }
  })
);

interface IHomeScreenProps {
  getAllLocations: Function;
  deleteALocation: Function;
}

interface StateProps extends StoreState {}

const _HomeScreen = (props: IHomeScreenProps & StateProps) => {
  const {
    locationReducer: { allLocations },
    deleteALocation
  } = props;
  const classes = useStyles();

  const [mapView, setMapView] = useState<boolean>(true);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<ILocation>(
    {} as ILocation
  );

  useEffect(() => {
    console.log(`home screen`);
    props.getAllLocations();
  }, []);
  return (
    <Container>
      <LocationAppBar />
      <div className={classes.container}>
        <Typography className={classes.header} variant="h3">
          Location Notes
        </Typography>
        <ButtonGroup
          className={classes.buttonGroup}
          color="primary"
          variant="contained"
        >
          <Button
            variant={mapView ? 'contained' : 'outlined'}
            onClick={() => setMapView(true)}
          >
            Map View
          </Button>
          <Button
            variant={!mapView ? 'contained' : 'outlined'}
            onClick={() => setMapView(false)}
          >
            Table View
          </Button>
        </ButtonGroup>
        {mapView && (
          <LocationMapView
            showDetail={() => setShowDetail(true)}
            setCurrentLocation={setCurrentLocation}
          />
        )}
        {!mapView && (
          <LocationTable
            showDetail={() => setShowDetail(true)}
            allLocations={allLocations}
            setCurrentLocation={setCurrentLocation}
            deleteALocation={deleteALocation}
          />
        )}
      </div>
      <LocationModal
        currentLocation={currentLocation}
        show={showDetail}
        onClose={() => setShowDetail(false)}
      />
    </Container>
  );
};

const mapStateToProps = (state: StoreState): StateProps => state;

export const HomeScreen = connect(mapStateToProps, {
  getAllLocations,
  deleteALocation
})(_HomeScreen);
