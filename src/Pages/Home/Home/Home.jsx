import React from "react";
import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import BistroBoss from "../BistroBoss/BistroBoss";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <BistroBoss />
    </>
  );
};

export default Home;
