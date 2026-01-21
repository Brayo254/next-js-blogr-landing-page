"use-client";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import React from "react";
import Content from "./components/Content";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Content />
    </>
  );
};

export default Home;
