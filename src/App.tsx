// import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import AppNavbar from "./layouts/navbar";
import React, { useEffect } from "react";
import Footer from "./layouts/footer";
import ContactUs from "./pages/contact";
import AboutUs from "./pages/about";
import Services from "./pages/services";
import Events from "./pages/event";
import EventInfo from "./pages/event/event_info";
import Programs from "./pages/programs";

function App() {
  const { pathname } = useLocation();

   // Setting page scroll to 0 when changing the route
   useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return (
    <React.Fragment>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventInfo />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
