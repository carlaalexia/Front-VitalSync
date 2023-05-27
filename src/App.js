import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Public from './routing/Public';
import Login from './Pages/Login'
import CreateUser from './Pages/Pacient/CreateUser';
import Menu from './Pages/Pacient/Menu';
import Profile from './Pages/Pacient/EditProfile';
import ViewProfile from './Pages/Pacient/ViewProfile';
import ViewMedAppoint from './Pages/Appoints/ViewMedAppoint';
import CreateMedAppoint from './Pages/Appoints/CreateMedAppoint';
import Admin from './Pages/SuperAdmin/Admin';
import ListMed from './Pages/SuperAdmin/ListMed';
import HomePage from './Pages/HomePage'
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav /> {/* Mover el componente Nav aquí */}
        <Routes>
          <Route path="/" element={<Navigate to="/homePage" replace />} />
          <Route path="/homePage" element={<Public />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Alist" element={<ListMed/>}/>
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/ViewProfile" element={<ViewProfile/>} />
          <Route path="/citas" element={<ViewMedAppoint/>}/>
          <Route path="/CreateAppoint" element={<CreateMedAppoint/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






