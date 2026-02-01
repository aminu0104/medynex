import React from "react";
import Hero from "../components/home/Hero";
import TrustedPartners from "../components/home/TrustedPartners";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";





const Home = () => {
  return (
    <>

      <Hero/>
      <TrustedPartners />
            <HowItWorks />
                  <WhyChooseUs />
                     <Testimonials />
                           <CTASection />
               
    </>
  );
};

export default Home;
