import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import FloatingScrollToTop from "./components/common/ScrollToTop";
import WhyUs from "./pages/WhyUs";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <FloatingScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </BrowserRouter>
  );
}
