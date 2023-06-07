import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Provider from "./context/ContextPerson/Provider";
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
import NavPro from "./components/NavPro";
import MedReview from "./Pages/MedRewiew";
import ProViewProfile from "./Pages/Doctor/ProViewProfile";
import EditProfesional from "./Pages/Doctor/EditProfesional";
import MewReviewAdmin from "./Pages/SuperAdmin/MewReviewAdmin";

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/homePage");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setHideNavbar(scrollPosition > 100); // ajusta la posición de desplazamiento según tus necesidades
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (userRole) {
    }
  }, [userRole]);

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole");
    if (storedUserRole) {
      setUserRole(storedUserRole);
      setIsLoggedIn(true);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("userRole");
    setUserRole(null);
    setIsLoggedIn(false);
  }

  function handleLogin(role) {
    localStorage.setItem("userRole", role);
    setUserRole(role);
    setIsLoggedIn(true);

    if (role === "ADMIN") {
      setRedirectPath("/homePage");
    } else if (role === "PROFESIONAL") {
      setRedirectPath("/homePage");
    } else if (role === "PACIENTE") {
      setRedirectPath("/homePage");
    } else {
      setRedirectPath("/homePage");
    }
  }

  let navigation = null;

  if (isLoggedIn) {
    if (userRole === "ADMIN") {
      navigation = <NavAdmin className={`navbar ${hideNavbar ? "hidden" : ""}`} onLogout={handleLogout} />;
    } else if (userRole === "PACIENTE") {
      navigation = <NavUser className={`navbar ${hideNavbar ? "hidden" : ""}`}onLogout={handleLogout} />;
    } else if (userRole === "PROFESIONAL") {
      navigation = <NavPro className={`navbar ${hideNavbar ? "hidden" : ""}`} onLogout={handleLogout} />;
    } else {
      navigation = <Nav className={`navbar ${hideNavbar ? "hidden" : ""}`} onLogout={handleLogout} />;
    }
  } else {
    navigation = <Nav className={`navbar ${hideNavbar ? "hidden" : ""}`} onLogin={handleLogin} />;
  }

  return (
    <Provider>
      <Router>
        <div className="app-container">
          {navigation}
          <div className="content-container">
            <Routes>
              <Route
                path="/"
                element={<Navigate to={redirectPath} replace />}
              />
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
              <Route path="/ProViewProfile" element={<ProViewProfile />} />
              <Route path="/ProViewProfile/:id" element={<ProViewProfile />} />
              <Route
                path="/editarProfesional/:id"
                element={<EditProfesional />}
              />
              <Route path="/ControlReview" element={<MewReviewAdmin />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
