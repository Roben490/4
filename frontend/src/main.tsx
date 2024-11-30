import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import CubeValueProvider from "./context/cubeValueProvider.tsx";
import CubePositionProvider from "./context/cubePositionProvider.tsx";
import PlayerProvider from "./context/playerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PlayerProvider>
      <CubePositionProvider>
        <CubeValueProvider>
          <App />
        </CubeValueProvider>
      </CubePositionProvider>
    </PlayerProvider>
  </BrowserRouter>
);
