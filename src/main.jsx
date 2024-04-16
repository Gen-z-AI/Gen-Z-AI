import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react'; 
import './index.css';
import { ContextProvider } from './components/ai-context/AiContext'; 


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-z1lfyi0hy3zoamlj.us.auth0.com"
      clientId="OQJCOy2admqtvz1ynoVMOE3fRlDiwc23"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <ContextProvider>
        <App />
      </ContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
