import React from "react";
import MainCategories from "../components/MainCategories";
import "../App.scss";
import LanguageSelector from "../components/LanguageSelector";
import ViewBasket from "../components/ViewBasket";

const Home = () => {
  return (
    <>
      <div className="title">
        <div>
          <h1>Kings Arms Cardington</h1>
          <p>
            134 High Street, Kempston, Bedford,
            <br /> Bedfordshire, MK42 7BN
          </p>
        </div>
        <div className="language">
          <LanguageSelector />
        </div>
      </div>
      <MainCategories />
      <ViewBasket/>
    </>
  );
};

export default Home;
