import React from "react"
import Auth0UserInfo from "./component/Auth0UserInfo/Auth0UserInfo"


function App() {

  return (
    <div className="text-center item-center mt-20">
      <h1 className="text-5xl font-bold">
        Gen'z-AI
      </h1>
      <h1 className="text-5xl font-bold">
        How can I help you today?
      </h1>
      <Auth0UserInfo/>
    </div>
  )
}

export default App
