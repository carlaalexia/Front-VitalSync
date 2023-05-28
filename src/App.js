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
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (userRole) {
      setIsLoggedIn(true);
      console.log("Rol usuario:", userRole); // Imprimir el rol del usuario en la consola
    }
  }, [userRole]);

  function handleLogin(role) {
    localStorage.setItem("userRole", role);
    setUserRole(role);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("userRole");
    setUserRole(null);
    setIsLoggedIn(false);
  }

  let navigation = null;

  if (isLoggedIn) {
    if (userRole === "ROL_PACIENTE") {
      console.log("Mostrando NavUser"); 
      navigation = <NavUser onLogout={handleLogout} />;
    } else if (userRole === "ROL_ADMIN") {
      console.log("Mostrando NavAdmin");
      navigation = <NavAdmin onLogout={handleLogout} />;
    } else {
      console.log("Mostrando Nav");
      navigation = <Nav onLogout={handleLogout} />;
    }
  } else {
    console.log("Mostrando Nav");
    navigation = <Nav onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div>
        {navigation}
        <Routes>
          <Route path="/" element={<Navigate to="/homePage" replace />} />
          <Route path="/homePage/*" element={<Public />} />
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
