import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import SelectHostel from './pages/SelectHostel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/select-hostel" element={<SelectHostel />} />
      </Routes>
    </Router>
  );
}

export default App;