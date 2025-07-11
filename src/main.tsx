import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import UploadResume from "./UploadResume.tsx";
import CritiqueResults from "./CritiqueResults.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CritiqueResults feedback="you are doing great!" />
    {/* <UploadResume /> */}
  </StrictMode>,
);
