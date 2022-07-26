import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/MoviePage";
import MoviePage from "../pages/MoviePage";
import MovieDetail from "../pages/MoviePage/MovieDetail";
import SeriesPage from "../pages/SeriesPage";
import SeriesDetail from "../pages/SeriesPage/SeriesDetail";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movies" component={MoviePage} />
        <Route path="/movies/:id" component={MovieDetail} />
        <Route path="/series" component={SeriesPage} />
        <Route path="/series/:id" component={SeriesDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesApp;
