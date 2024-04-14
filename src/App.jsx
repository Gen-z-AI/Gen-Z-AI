import React from "react";
import Navbar from './components/navbar/Navbar'
import AnimatedCursor from "react-animated-cursor"
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import ServicesList from "./components/services/ServicesList";
import Team from "./components/team/Team";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
        responsive={true} // Enable responsive mode
      />
      <div>
        <Navbar />
        <Hero/>
        <ServicesList/>
        <Team/>
        <Footer/>
      </div>
    </>
  )
}

export default App;