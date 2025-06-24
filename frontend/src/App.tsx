import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Restaurant from './pages/Restaurant';
import Banquet from './pages/Banquet';
import Contact from './pages/Contact';
import HarshGarden from './pages/banquet/HarshGarden';
import Avantika from './pages/banquet/Avantika';
import Mithla from './pages/banquet/Mithla';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/banquet" element={<Banquet />} />
            <Route path="/banquet/harshgarden" element={<HarshGarden />} />
            <Route path="/banquet/avantika" element={<Avantika />} />
            <Route path="/banquet/mithla" element={<Mithla />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;