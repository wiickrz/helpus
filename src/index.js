import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./Providers";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Providers>
      <App />
    </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
