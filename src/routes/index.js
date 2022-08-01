import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import MovieDetail from "../pages/MoviePage/MovieDetail";
import SeriesPage from "../pages/SeriesPage";
import SeriesDetail from "../pages/SeriesPage/SeriesDetail";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
