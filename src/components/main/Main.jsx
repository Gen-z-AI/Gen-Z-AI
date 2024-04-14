import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Sidebar from "../sidebar/Sidebar.jsx";

export default function Main() {
  return (
    <>
      <Auth0Provider
        domain="dev-z1lfyi0hy3zoamlj.us.auth0.com"
        clientId="OQJCOy2admqtvz1ynoVMOE3fRlDiwc23"
        redirectUri={window.location.origin} // Use redirectUri instead of authorizationParams
      ></Auth0Provider>
      <div className="screen">
        <Sidebar />
        <div className="mainframe">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
