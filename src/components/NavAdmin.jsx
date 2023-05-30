import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";

function NavAdmin() {
  const [showPersonMenu, setShowPersonMenu] = useState(false);
  const [showAppointMenu, setShowAppointMenu] = useState(false);

  const handlePersonMenuClick = () => {
    setShowPersonMenu(!showPersonMenu); // Cambia el estado al hacer clic en "Turnos"
  };

  const handleAppointMenuClick = () => {
    setShowAppointMenu(!showAppointMenu); // Cambia el estado al hacer clic en "Turnos"
  };

  return (
    <div className="bg-zinc-700 flex justify-around items-center py-1 shadow-md">
      <img className="h-24 w-auto mb-2" src="./assets/Logo3.png" alt="VitalS" />
      {/* ACERCA DE */}
      <div className="font-bold text-white hover:text-teal-600 cursor-pointer relative">
        <NavLink className="mr-3" to="/homePage">Inicio</NavLink>
      </div>

      {/* Profesionales */}
      <span className="text-white ml-1">|</span> {/* Barra entre los elementos */}
      <div
        className="font-bold text-white hover:text-teal-600 cursor-pointer relative"
        onClick={handleAppointMenuClick} // Agrega el evento onClick
      >
        Profesionales
        {showAppointMenu && (
          <div className="absolute bg-white py-2 w-40 shadow-md z-10 rounded appoint-menu">
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100 text-black no-underline"
              to="/Admin"
            >
              Crear
            </NavLink>
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100 text-black no-underline"
              to="/Alist"
            >
              Lista
            </NavLink>
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100 text-black no-underline"
              to="/Profesionales"
            >
              Comentarios
            </NavLink>
          </div>
        )}
      </div>
      <span className="text-white ml-1">|</span> {/* Barra entre los elementos */}
      {/* PERFIL */}
      <div
        className="font-bold text-white hover:text-teal-600 cursor-pointer relative mr-10" 
        onClick={handlePersonMenuClick} // Agrega el evento onClick
      >
        Admin
        {showPersonMenu && (
          <div className="absolute bg-white py-2 w-40 shadow-md z-10 rounded appoint-menu">
            <button className="px-4 text-center hover:bg-gray-100 text-black text-sm">
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default NavAdmin;
