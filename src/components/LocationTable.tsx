import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ILocation } from '../stores/types';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from '@material-ui/core';

interface ILocationTableProps extends RouteComponentProps {
  allLocations: ILocation[];
  showDetail(): void;
  setCurrentLocation: Function;
}

const _LocationTable = (props: ILocationTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allLocations.map(location => (
            <TableRow key={location.id.toString()}>
              <TableCell component="th" scope="row">
                {location.name}
              </TableCell>
              <TableCell align="right">{location.description}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    props.setCurrentLocation(location);
                    props.showDetail();
                  }}
                >
                  VIEW
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const LocationTable = withRouter(_LocationTable);
