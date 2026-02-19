import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SmoothScrollProvider from "./providers/SmoothScrollProvider.tsx";
import { AuroraProvider } from "./providers/AuroraProvider.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out-cubic",
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuroraProvider>
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </AuroraProvider>
  </BrowserRouter>,
);
