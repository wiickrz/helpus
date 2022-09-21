import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Providers } from "./Providers";
import { AuthProvider } from "./Providers/Auth";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Providers>
          <App />
        </Providers>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
