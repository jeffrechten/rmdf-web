import "./style.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home.jsx";
import PressReleases from "./pages/PressReleases.jsx";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // On route change with no hash, behave like normal navigation
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    // Let the page render first
    window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/press" element={<PressReleases />} />
      </Routes>
    </>
  );
}
