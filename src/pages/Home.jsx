import React from 'react';
import MainCategories from '../components/MainCategories';
import '../App.scss';

const Home = () => {
  return (
    <div className="title">
      <h1>Kings Arms Cardington</h1>
      <p>134 High Street, Kempston, Bedford,<br /> Bedfordshire, MK42 7BN</p>
      <MainCategories />
    </div>
  );
};

export default Home;
