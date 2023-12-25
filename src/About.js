
import HeroSection from "./components/HeroSection";

 

const About = () => {


  const data = {
    name: "AutoNex Ecommerce",
  };

  return(
  <>
    <HeroSection myData={data} /> 
  </>
  );
};

export default About;