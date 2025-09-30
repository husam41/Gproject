import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Hotel from "./components/Hotel";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/hotel" element={<Hotel/>} />
  <Route path="/sightseeing" element={<h1>Sightseeing Page</h1>} />
  <Route path="/restaurant" element={<h1>Restaurant Page</h1>} />
</Routes>

    </div>
  );
}

export default App;