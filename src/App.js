// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ConditionalWrapper from './components/ConditionalWrapper';
// import './App.css';
import Signup from './pages/Signup';
import { UserProvider } from './context/UserContext';
import Welcome from './pages/Welcome';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
   <UserProvider>
    <Router>
      <ConditionalWrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/welcome" element={ <ProtectedRoute> <Welcome/> </ProtectedRoute>}/>
        </Routes>
      </ConditionalWrapper>
    </Router>
    </UserProvider>
  );
}

export default App;
// </ProtectedRoute>