import React from "react";
import AboutMe from "../components/AboutMe";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <Greeting />
      <AboutMe />
      <Connect />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
