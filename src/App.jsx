import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";
import Faqs from "./Components/Faq";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
