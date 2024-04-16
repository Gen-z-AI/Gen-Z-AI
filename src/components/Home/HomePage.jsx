import React from "react";
import Navbar from './navbar/Header';
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import ServicesList from "./services/ServicesList";
import Team from "./team/Team";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesList />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
