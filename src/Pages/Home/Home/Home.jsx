import React from "react";
import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import BistroBoss from "../BistroBoss/BistroBoss";
import OurMenu from "../OurMenu/OurMenu";
import Recommend from "../Recommend/Recommend";
import { Helmet } from "react-helmet-async";


const Home = () => {

  return (
    <>
      <Helmet>
        <title>BISTRO | Home</title>
      </Helmet>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <BistroBoss />
      <OurMenu></OurMenu>
      <Recommend />
    </>
  );
};

export default Home;
