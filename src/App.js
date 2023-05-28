import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Public from "./routing/Public";
import Login from "./Pages/Login";
import CreateUser from "./Pages/Pacient/CreateUser";
import EditProfile from "./Pages/Pacient/EditProfile";
import ViewProfile from "./Pages/Pacient/ViewProfile";
import ViewMedAppoint from "./Pages/Appoints/ViewMedAppoint";
import CreateMedAppoint from "./Pages/Appoints/CreateMedAppoint";
import Admin from "./Pages/SuperAdmin/Admin";
import ListMed from "./Pages/SuperAdmin/ListMed";
import Nav from "./components/Nav";
import NavUser from "./components/NavUser";
import NavAdmin from "./components/NavAdmin";
import MedReview from "./Pages/MedRewiew";

function App() {
  let navigation = null;
  const userRole = localStorage.getItem("userRole");

  if (userRole === "PACIENTE") {
    navigation = <NavUser />;
  } else if (userRole === "Admin") {
    navigation = <NavAdmin />;
  } else {
    navigation = <Nav />; // Aquí puedes utilizar tu componente Nav principal
  }

  return (
    <Router>
      <div>
        {navigation}
        <Routes>
          <Route path="/" element={<Navigate to="/homePage" replace />} />
          <Route path="/homePage" element={<Public />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Alist" element={<ListMed />} />
          <Route path="/Profile" element={<EditProfile />} />
          <Route path="/ViewProfile" element={<ViewProfile />} />
          <Route path="/Turnos" element={<ViewMedAppoint />} />
          <Route path="/PedirTurno" element={<CreateMedAppoint />} />
          <Route path="/Profesionales" element={<MedReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
