
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Feature from "./Components/Feature";

import Projects from './Components/Projects'
import Services from './Components/Services'
import Form from './Components/Form'
import Footer from './Components/Footer'

function App() {
  useEffect(() => {
    AOS.init();
  },[])
  
  return (
    <Router>
      <div className='parent-container overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<div><Projects /><Services /><Form /><Footer /></div>} />
          <Route path="/feature" element={<Feature />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
