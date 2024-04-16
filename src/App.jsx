import Main from "./component/main/Main.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="text-center item-center mt-20">
        <h1 className="text-5xl font-bold">Gen-z-AI</h1>
        <h1 className="text-5xl font-bold">How can I help you today?</h1>
      </div> */}
      <Auth0Provider
        domain="dev-z1lfyi0hy3zoamlj.us.auth0.com"
        clientId="OQJCOy2admqtvz1ynoVMOE3fRlDiwc23"
        redirectUri={window.location.origin} // Use redirectUri instead of authorizationParams
      ></Auth0Provider>
      <Main />
    </>
  );
}

export default App;
