import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Logement from './components/Logement/logement';
import NotFound from './components/NotFound/notfound';
import './components/global.sass';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;