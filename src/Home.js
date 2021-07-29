import React from "react";
import Common from "./Common";
import web from "./img/homeimg.jpg";

const Home = () => {
  return (
    <>
      <Common name='Grow Your business with' imgsrc={web} visit='/service' btname="Get Started" />
    </>
  );
};

export default Home;