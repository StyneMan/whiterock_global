// import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AppNavbar from "./layouts/navbar";
import React from "react";
import Footer from "./layouts/footer";

function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
