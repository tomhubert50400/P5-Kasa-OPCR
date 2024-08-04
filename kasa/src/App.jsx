import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.sass";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Logements from "./pages/Logements";

function App() {
  return (
    <Router>
      <div id="root">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="logement/:id" element={<Logements />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
