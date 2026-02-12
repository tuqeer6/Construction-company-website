import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import CEOMessage from "./components/CEOMessage";
import ContactUS from "./components/ContactUS";
import CostCalculator from "./components/CostCalculator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

import { Routes, Route, useLocation } from "react-router-dom";
import ConstructionService from "./pages/ConstructionService";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Default behavior: scroll to top when landing on home
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Hero />
      <AboutUs />
      <Projects />
      <CostCalculator />
      <CEOMessage />
      <Testimonials />
      <ContactUS />
    </>
  );
};

const App = () => {
  return (
    <div className="bg-emerald-900 text-white overflow-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceType" element={<ConstructionService />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
