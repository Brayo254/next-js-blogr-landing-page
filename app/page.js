"use-client";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import React from "react";
import Content from "./components/Content";
import Infrastructure from "./components/Infrastructure";
import SecondContent from "./components/SecondContent";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Content />
      <Infrastructure />
      <SecondContent />
    </>
  );
};

export default Home;
