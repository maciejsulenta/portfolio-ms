import React from "react";
import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import MyWorkDesktop from "../components/MyWorkDesktop";
import MyWorkMobile from "../components/MyWorkMobile";

const Landing = () => {
  return (
    <>
      <Cursor />
      <Header />
      <Contact />
      <MyWorkDesktop />
      <MyWorkMobile />
    </>
  );
};

export default Landing;
