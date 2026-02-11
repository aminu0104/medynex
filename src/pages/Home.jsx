import React from "react";

import Hero from "../components/home/Hero";
import TrustedPartners from "../components/home/TrustedPartners";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CtaButton from "../components/common/CtaButton";



const Home = () => {
  return (
    <>
   
        <Hero />

      <TrustedPartners />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
         <CtaButton />
        

    </>
  );
};

export default Home;
