import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import React from "react";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./global/components/NavBar";
import Home from "./home/Home";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar setTheme={setTheme} />
      </header>
      <div className="App-body">
        <Router>
          <Routes>            
            <Route path="/" element={<Home theme={theme} />} />           
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
