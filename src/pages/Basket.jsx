import React, { Profiler } from "react";
import BasketPage from "../components/BasketPage";

const Basket = () => {
  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log(id, "id")
    console.log(phase, "phase")
    console.log(actualDuration, "actualDuration")
    console.log(baseDuration,"baseDuration")
    console.log(startTime, "startTime")
    console.log(commitTime,"commitTime")
}

  return (
    <div>
      <Profiler id="BasketPage" onRender={onRender}>
        <BasketPage />
      </Profiler>
    </div>
  );
};

export default Basket;
