import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      {/* Envuelve tu aplicación con el enrutador */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
