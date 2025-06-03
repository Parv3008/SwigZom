import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BasketPage from '../components/BasketPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
};

export default AppRoutes;
