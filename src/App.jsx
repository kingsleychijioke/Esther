import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageTransition from "./components/PageTransition/PageTransition";

import Intro from "./components/Intro/Intro";
import Hero from "./components/Hero/Hero";
import Memories from "./components/Memories/Memories";
import LoveLetter from "./components/LoveLetter/LoveLetter";
import Gift from "./components/Gift/Gift";
import Wish from "./components/Cake/Cake";
import FinalScene from "./components/FinalScene/FinalScene";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname} />
      </AnimatePresence>
      <ScrollToTop />
      <Routes location={location}>
        <Route path="/" element={<Intro />} />

        <Route path="/hero" element={<Hero />} />

        <Route path="/memories" element={<Memories />} />

        <Route path="/letter" element={<LoveLetter />} />

        <Route path="/surprise" element={<Gift />} />

        <Route path="/Cake" element={<Wish />} />

        <Route path="/final" element={<FinalScene />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
