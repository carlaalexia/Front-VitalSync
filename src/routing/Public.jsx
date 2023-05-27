import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import CreateUser from "../Pages/Pacient/CreateUser";
import Profile from "../Pages/Pacient/EditProfile";
import ViewProfile from "../Pages/Pacient/EditProfile";
import ViewMedAppoint from "../Pages/Appoints/ViewMedAppoint";
import CreateMedAppoint from "../Pages/Appoints/CreateMedAppoint";
import Admin from "../Pages/SuperAdmin/Admin";
import HomePage from '../Pages/HomePage'
import MedReview from "../Pages/MedRewiew";

const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CreateUser" element={<CreateUser />} />
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/ViewProfile" element={<ViewProfile/>}/>
      <Route path="/Turnos" element={<ViewMedAppoint/>}/>
      <Route path="/PedirTurno" element={<CreateMedAppoint/>} />
      <Route path="/Profesionales" element={<MedReview/>} />
    </Routes>
  );
}

export default Public;