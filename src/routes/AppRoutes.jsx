import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Basket from '../pages/Basket';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default AppRoutes;
