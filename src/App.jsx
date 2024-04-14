<<<<<<< HEAD
import React from "react";
import Navbar from './components/navbar/Navbar'
import AnimatedCursor from "react-animated-cursor"
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import ServicesList from "./components/services/ServicesList";
import Team from "./components/team/Team";
=======
import React from "react"
import Auth0UserInfo from "./components/auth0UserInfo/Auth0UserInfo"
import { Button } from "@/components/ui/button"
import Main from "./components/main/Main.jsx";
import "./App.css";
>>>>>>> 68122cb301b9f55037079abc48f1cf11be7e1232

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
<<<<<<< HEAD
    </>
  )
}

export default App;
=======

      {/* shadcn componenet */}
      <Button>Click me</Button>
      <Main />
    </div>
  )
}

export default App


// function App() {
//   return (
//     <>
//       {/* <div className="text-center item-center mt-20">
//         <h1 className="text-5xl font-bold">Gen-z-AI</h1>
//         <h1 className="text-5xl font-bold">How can I help you today?</h1>
//       </div> */}

//     </>
//   );
// }

// export default App;
>>>>>>> 68122cb301b9f55037079abc48f1cf11be7e1232
