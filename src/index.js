import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
import { Providers } from "./Providers";
>>>>>>> register
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
      <Providers>
        <App />
      </Providers>
>>>>>>> register
    </BrowserRouter>
  </React.StrictMode>
);
