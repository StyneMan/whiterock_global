import React from "react";
import WhyChooseUs from "./sections/why_choose_us";
import Testimonials from "./sections/testimonials";
import Team from "./sections/team";
import ContactSection from "./sections/contact";
import OurPrograms from "./sections/our_programs";
import Hero from "./sections/hero";

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <OurPrograms />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <ContactSection />
    </React.Fragment>
  );
};

export default HomePage;
