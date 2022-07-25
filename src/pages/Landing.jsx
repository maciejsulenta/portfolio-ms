import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Header from "../components/Header";
import MyWorkDesktop from "../components/MyWorkDesktop";
import MyWorkMobile from "../components/MyWorkMobile";
import { container, item, RouteBubble } from "../components/RoutesAnimations";

const Landing = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <RouteBubble
        t="0%"
        l="0%"
        w="20%"
        h="40%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        t="60%"
        l="80%"
        w="20%"
        h="40%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        t="0"
        l="30%"
        w="35%"
        h="50%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        t="60%"
        l="20%"
        w="15%"
        h="30%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        t="50%"
        l="40%"
        w="25%"
        h="50%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        t="0%"
        l="75%"
        w="25%"
        h="50%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        t="-20%"
        l="25%"
        w="20%"
        h="40%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        t="65%"
        l="-5%"
        w="20%"
        h="40%"
        variants={item}
        transition={{ duration: 0.5 }}
      />
      <Header />
      <Contact />
      <MyWorkDesktop />
      <MyWorkMobile />
    </motion.div>
  );
};

export default Landing;
