// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ConditionalWrapper from './components/ConditionalWrapper';
import './App.css';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <ConditionalWrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </ConditionalWrapper>
    </Router>
  );
}

export default App;
