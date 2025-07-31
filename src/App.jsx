import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import SingleService from "./pages/SingleService";
import ServiceCategory from "./pages/ServiceCategory";
import SingleBand from "./pages/SingleBand";
import SingleBlog from "./pages/SingleBlog";
import MoneyMouth from "./pages/MoneyMouth";
import Band from "./pages/Band";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    const scripts = [
      "/js/jquery-3.7.1.min.js",
      "/js/plugins.min.js",
      "/js/plugins/dsn-grid.min.js",
      "/js/custom.js",
    ];

    const scriptElements = scripts.map((src) => {
      const s = document.createElement("script");
      s.src = window.location.origin + src;
      s.async = true;
      document.body.appendChild(s);
      return s;
    });

    return () => {
      scriptElements.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  

  return (
    <Router>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/band" element={<Band />} />
        <Route path="/service/:id" element={<SingleService/>} />
        <Route path="/service_category/:id" element={<ServiceCategory/>} />
        <Route path="/blog/:id" element={<SingleBlog/>} />
        <Route path="/portfolio/:id" element={<SingleBand/>} />
        <Route path="/moneymouth" element={<MoneyMouth/>} />
      </Routes>
    </Router>
  );
}

export default App;
