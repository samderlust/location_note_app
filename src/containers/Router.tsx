import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';
import { CreateLocation } from './CreateLocation';
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/create" component={CreateLocation} />
      </Switch>
    </BrowserRouter>
  );
};
