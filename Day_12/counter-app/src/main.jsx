import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// still have to use a var store CounterApp object
import CounterApp from "./CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
