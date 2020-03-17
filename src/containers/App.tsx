import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { configureStore } from '../stores';
import { HomeScreen } from './HomeScreen';
import { Router } from './Router';

// import { AppRouter } from './screens/AppRouter';
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ee5340'
    },
    secondary: {
      main: '#0097a9'
    }
  }
});

const App = () => {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={muiTheme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
