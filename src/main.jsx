import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-z1lfyi0hy3zoamlj.us.auth0.com"
      clientId="OQJCOy2admqtvz1ynoVMOE3fRlDiwc23"
      redirectUri={window.location.origin} // Use redirectUri instead of authorizationParams
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
