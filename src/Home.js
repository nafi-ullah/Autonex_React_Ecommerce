import React from "react";
//import styled from "styled-components";
import HeroSection from "./components/HeroSection";
//import Dummy from "./components/Dummy";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";

const Home = () => {
    const data = {
        name: "AutoNex",
      };
    
      return <>
      
      <HeroSection myData={data} />
      <Services></Services>
      <FeatureProducts></FeatureProducts>
      <Trusted></Trusted>
      </>;
};



export default Home;