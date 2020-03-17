import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 10
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export const LocationAppBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Location Note
          </Typography>
          <Button onClick={() => history.push('/')} color="inherit">
            Home
          </Button>
          <Button onClick={() => history.push('/create')} color="inherit">
            Create
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
