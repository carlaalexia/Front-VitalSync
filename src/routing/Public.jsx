import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import CreateUser from "../Pages/Pacient/CreateUser";
import EditProfile from "../Pages/Pacient/EditProfile";
import ViewProfile from "../Pages/Pacient/EditProfile";
import ViewMedAppoint from "../Pages/Appoints/ViewMedAppoint";
import CreateMedAppoint from "../Pages/Appoints/CreateMedAppoint";
import Admin from "../Pages/SuperAdmin/Admin";
import HomePage from '../Pages/HomePage'
import MedReview from "../Pages/MedRewiew";
import ListMed from "../Pages/SuperAdmin/ListMed";
import ProViewProfile from "../Pages/Doctor/ProViewProfile";
import EditProfesional from "../Pages/Doctor/EditProfesional";
import MewReviewAdmin from "../Pages/SuperAdmin/MewReviewAdmin";
import ViewAppoint from "../Pages/Doctor/ViewAppoint";
import ViewHistory from "../Pages/Doctor/ViewHistory";

const Public = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Alist" element={<ListMed/>}/>
        <Route path="/Profile" element={<EditProfile />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />
        <Route path="/Turnos" element={<ViewMedAppoint/>}/>
        <Route path="/medTurnos" element={<ViewAppoint/>}/>
        <Route path="/historial/:pacienteId" element={<ViewHistory/>}/>
        <Route path="/CreateAppoint" element={<CreateMedAppoint />} />
        <Route path="/Profesionales" element={<MedReview/>} />
        <Route path="/ProViewProfile" element={<ProViewProfile/>} />
        <Route path="/ProViewProfile/:id" element={<ProViewProfile />} />
        <Route path="/editarProfesional/:id" element={<EditProfesional/>} />
        <Route path="/ControlReview" element={<MewReviewAdmin />} />
      </Routes>
    </>
  );
}

export default Public;