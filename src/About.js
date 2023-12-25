import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/productcontext";
//2nd method er import, agyr gula lagbe na
import { useProductContext } from "./context/productcontext";
 

const About = () => {
const myCompany = useContext(AppContext); // Ekhane value ta recieve kora hoise
// 2nd method fetch
const  newMethod = useProductContext();

  const data = {
    name: "AutoNex Ecommerce",
  };

  return(
  <>
    {myCompany} <br/>
    {newMethod}
    <HeroSection myData={data} /> {" "}
  </>
  );
};

export default About;