import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Homepage from "./pages/Homepage";
import Aboutme from './pages/Aboutme';
import Project from './pages/Project';

// CSS
import "./styles/sass/style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/aboutme" element={<Aboutme />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="*" element={<Homepage />} />
        <Route />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
