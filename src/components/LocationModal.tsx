import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal
} from '@material-ui/core';

import { ILocation } from '../stores/types';

interface ILocationModalProps {
  onClose(): void;
  show: boolean;
  currentLocation: ILocation;
}

const _LocationModal = (props: ILocationModalProps) => {
  return (
    <Modal
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      open={props.show}
      onClose={props.onClose}
    >
      <React.Fragment>
        {props.currentLocation && (
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.currentLocation?.name}
              </Typography>
              <Typography variant="body2">
                {props.currentLocation.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={props.onClose}
                variant="contained"
                color="primary"
              >
                Back
              </Button>
            </CardActions>
          </Card>
        )}
        <div>
          {props.currentLocation === undefined && <h1>Loading....</h1>}
          {props.currentLocation === null && (
            <h1>This Location is not available</h1>
          )}
        </div>
      </React.Fragment>
    </Modal>
  );
};

export const LocationModal = _LocationModal;
