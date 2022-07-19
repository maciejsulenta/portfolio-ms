import React from "react";
import Header from "../components/Header";

const Landing = () => {
  return (
    <>
      <Header />
      <div
        style={{ backgroundColor: "white", height: "60px", width: "100%", borderTop: "10px solid black" }}
      />
      <div
        style={{ backgroundColor: "black", height: "30vh", width: "100%" }}
      />
    </>
  );
};

export default Landing;
