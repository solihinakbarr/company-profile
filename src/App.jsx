import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
