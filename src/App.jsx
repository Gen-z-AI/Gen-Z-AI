import React from "react"
import Auth0UserInfo from "./components/auth0UserInfo/Auth0UserInfo"
import { Button } from "@/components/ui/button"

function App() {

  return (
    <div className="text-center item-center mt-20">
      <h1 className="text-5xl font-bold">
        Gen'z-AI
      </h1>
      <h1 className="text-5xl font-bold">
        How can I help you today?
      </h1>
      <div className="item-center">
        <Auth0UserInfo/>
      </div>
      <Button>Click me</Button>
    </div>
  )
}

export default App
