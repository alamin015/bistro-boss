import React from "react";
import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import BistroBoss from "../BistroBoss/BistroBoss";
import OurMenu from "../OurMenu/OurMenu";
import Recommend from "../Recommend/Recommend";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <BistroBoss />
      <OurMenu></OurMenu>
      <Recommend />
    </>
  );
};

export default Home;
