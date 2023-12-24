import React from "react";
//import styled from "styled-components";
import HeroSection from "./components/HeroSection";
//import Dummy from "./components/Dummy";

const Home = () => {
    const data = {
        name: "AutoNex",
      };
    
      return <HeroSection myData={data} />;
};



export default Home;