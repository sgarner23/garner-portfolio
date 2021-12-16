import React from "react";
import AboutMe from "../components/AboutMe";
import Connect from "../components/Connect";
import Greeting from "../components/Greeting";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Greeting />
      <AboutMe />
      <Connect />
    </div>
  );
}

export default Home;
