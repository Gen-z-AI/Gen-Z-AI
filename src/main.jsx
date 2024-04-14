import React from 'react';
import ReactDOM from 'react-dom/client'; // Change import statement
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-z1lfyi0hy3zoamlj.us.auth0.com"
      clientId="OQJCOy2admqtvz1ynoVMOE3fRlDiwc23"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
  
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
