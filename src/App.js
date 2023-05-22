import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Public from './routing/Public';
import CreateUser from './components/CreateUser';
import Menu from './components/Menu';
import Profile from './components/EditProfile';
import ViewProfile from './components/ViewProfile';
import ViewMedAppoint from './components/ViewMedAppoint';
import CreateMedAppoint from './components/CreateMedAppoint';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Public />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/ViewProfile" element={<ViewProfile/>} />
        <Route path="/citas" element={<ViewMedAppoint/>}/>
        <Route path="/CreateAppoint" element={<CreateMedAppoint/>} />
      </Routes>
    </Router>
  );
}

export default App;






