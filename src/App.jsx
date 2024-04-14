import React from "react"
import Auth0UserInfo from "./components/auth0UserInfo/Auth0UserInfo"
import { Button } from "@/components/ui/button"
import Main from "./components/main/Main.jsx";
import "./App.css";

function App() {

  return (
    <div className="text-center item-center mt-20">
      <h1 className="text-5xl font-bold">
        Gen'z-AI
      </h1>
      <h1 className="text-5xl font-bold">
        How can I help you today?
      </h1>
      <div className="w-12/12 lg:w-10/12 flex justify-end p-0 right-8 mt-2">
        <Auth0UserInfo />
      </div>

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
