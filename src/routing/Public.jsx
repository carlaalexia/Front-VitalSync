import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import CreateUser from '../components/CreateUser';
import Menu from '../components/Menu';
import Profile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';
import ViewMedAppoint from '../components/ViewMedAppoint';
import CreateMedAppoint from '../components/CreateMedAppoint';
import Admin from '../components/Admin';

const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CreateUser" element={<CreateUser />} />
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/ViewProfile" element={<ViewProfile/>}/>
      <Route path="/citas" element={<ViewMedAppoint/>}/>
      <Route path="/CreateAppoint" element={<CreateMedAppoint/>} />
    </Routes>
  );
}

export default Public;