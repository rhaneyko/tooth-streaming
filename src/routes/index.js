import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';

import SeriesDetail from '../pages/SeriesPage/SeriesDetail';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/series/:id' element={<SeriesDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
