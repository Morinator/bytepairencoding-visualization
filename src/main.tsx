import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BPEVisualization from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BPEVisualization />
  </StrictMode>
);
