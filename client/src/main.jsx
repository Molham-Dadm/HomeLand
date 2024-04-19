import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
// import 'dotenv/config';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider 
        domain="dev-c87x3xt1htz35oeu.us.auth0.com"
        clientId="Va3xnKAWV8aGeCxvZdAOiiniXhqPwFux"
        authorizationParams={{
          redirect_uri: "https://real-estate-rust-tau.vercel.app"
        }}
        audience="http://localhost:8500"
        scope="openid profile email"
    >
       <App />
    </Auth0Provider>
  </React.StrictMode>
);
