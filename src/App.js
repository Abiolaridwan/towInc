import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutCompany from "./components/AboutCompany";
import WhatToExpect from "./components/WhatToExpect";
import MapAndLocation from "./components/MapAndLocation";
import Services from "./components/Services";
import MissionVision from "./components/MissionVision";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import RequestForm from "./components/RequestForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutCompany />
      <WhatToExpect />
      <MapAndLocation />
      <Services />
      <MissionVision />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <RequestForm />
      <Footer />
    </div>
  );
};

export default App;
