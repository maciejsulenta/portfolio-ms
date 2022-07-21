import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import MyWorkDesktop from "../components/MyWorkDesktop";
import MyWorkMobile from "../components/MyWorkMobile";

const Landing = () => {
  return (
    <>
      <Header />
      <Contact />
      <MyWorkDesktop />
      <MyWorkMobile />
    </>
  );
};

export default Landing;
