import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Public from './routing/Public';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Public />} />
        <Route path="/CreateUser" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;






