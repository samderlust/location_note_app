import React, { useState } from 'react';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createNewLocation, setErrorMessage } from '../stores/actions';
import { StoreState } from '../stores/reducers';
import { useHistory } from 'react-router-dom';
import { LocationAppBar } from '../components/LocationAppBar';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      background: '#fff',
      alignItems: 'center'
    },
    input: {
      width: 400,
      marginTop: 10,
      marginBottom: 10
    },
    label: {
      background: 'white'
    }
  })
);

interface ICreateLocationProps {
  createNewLocation: Function;
  setErrorMessage: Function;
}
interface StateProps extends StoreState {}

const _CreateLocation = (props: ICreateLocationProps & StateProps) => {
  const classes = useStyles();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [errorField, setErrorField] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const history = useHistory();

  const {
    locationReducer: { error, isCreating }
  } = props;

  const getCurrentLocation = async () => {
    navigator?.geolocation?.getCurrentPosition(pos => {
      const { longitude: lng, latitude: lat } = pos.coords;
      setLatitude(String(lat));
      setLongitude(String(lng));
    });
  };

  const validateField = (): boolean => {
    props.setErrorMessage('');
    setErrorField('');
    setErrorText('');
    if (name === '') {
      setErrorField('name');
      setErrorText(`name can't be empty`);
      return false;
    } else if (description === '') {
      setErrorField('description');
      setErrorText(`description can't be empty`);
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!validateField()) return;
    const newPet = {
      name,
      description,
      latitude,
      longitude
    };
    await props.createNewLocation(newPet, history);
  };

  return (
    <Container>
      <LocationAppBar />
      <div className={classes.container}>
        <Typography variant="h3">Add New Pet</Typography>
        <TextField
          error={errorField === 'name'}
          helperText={errorField === 'name' && errorText}
          variant="outlined"
          className={classes.input}
          label="Name"
          placeholder="Ottawa"
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
        <TextField
          error={errorField === 'description'}
          helperText={errorField === 'description' && errorText}
          variant="outlined"
          className={classes.input}
          label="Description"
          placeholder="This is a great place"
          value={description}
          multiline
          rows={3}
          onChange={evt => setDescription(evt.target.value)}
        />
        <TextField
          error={errorField === 'latitude'}
          helperText={errorField === 'latitude' && errorText}
          variant="outlined"
          className={classes.input}
          label="Latitude"
          placeholder="45.2487862"
          value={latitude}
          disabled
          onChange={evt => setLatitude(evt.target.value)}
        />
        <TextField
          error={errorField === 'longitude'}
          helperText={errorField === 'longitude' && errorText}
          variant="outlined"
          className={classes.input}
          label="Longitude"
          placeholder="-76.3606792"
          value={longitude}
          disabled
          onChange={evt => setLongitude(evt.target.value)}
        />
        <Button
          disabled={isCreating}
          className={classes.input}
          variant="contained"
          color="secondary"
          onClick={getCurrentLocation}
        >
          Get Current Location
          <GpsFixedIcon />
        </Button>
        <Typography style={{ color: 'red' }}>{error}</Typography>
        <Button
          disabled={isCreating}
          className={classes.input}
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Create
        </Button>
      </div>
    </Container>
  );
};
const mapStateToProps = (state: StoreState): StateProps => state;

export const CreateLocation = connect(mapStateToProps, {
  setErrorMessage,
  createNewLocation
})(_CreateLocation);
