
import './App.css';
import React from "react";

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';

// Routing Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      hello this is App
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
