import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import HomePage from "../pages/HomePage";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies:id+" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
