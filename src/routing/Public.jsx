import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import CreateUser from "../Pages/Pacient/CreateUser";
import Menu from "../Pages/Pacient/Menu";
import Profile from "../Pages/Pacient/EditProfile";
import ViewProfile from "../Pages/Pacient/EditProfile";
import ViewMedAppoint from "../Pages/Appoints/ViewMedAppoint";
import CreateMedAppoint from "../Pages/Appoints/CreateMedAppoint";
import Admin from "../Pages/SuperAdmin/Admin";
import HomePage from '../Pages/HomePage'
import ListMed from "../Pages/SuperAdmin/ListMed";

const Public = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Alist" element={<ListMed/>}/>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />
        <Route path="/citas" element={<ViewMedAppoint />} />
        <Route path="/CreateAppoint" element={<CreateMedAppoint />} />
      </Routes>
    </>
  );
};

export default Public;
