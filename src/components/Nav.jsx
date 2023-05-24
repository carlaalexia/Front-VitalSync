import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const [showPersonMenu, setShowPersonMenu] = useState(false);

  const handlePersonMenuHover = () => {
    setShowPersonMenu(true);
  };

  const handlePersonMenuLeave = () => {
    setShowPersonMenu(false);
  };

  return (
    <div className="bg-zinc-700 flex justify-around items-center py-6 shadow-md">
      {/* ACERCA DE */}
      <h5 className="font-bold text-white hover:text-teal-600 cursor-pointer relative">
        <NavLink to="/homePage">
            Acerca de
        </NavLink>
      </h5>
      {/* PROFESIONALES */}
      <span className="text-white">|</span> {/* Barra entre los elementos */}
      <h5 className="font-bold text-white hover:text-teal-600 cursor-pointer relative">
        Profesionales
      </h5>
      {/* TURNOS */}
      <span className="text-white">|</span> {/* Barra entre los elementos */}
      <h5 className="font-bold text-white hover:text-teal-600 cursor-pointer relative">
        <NavLink to="/Menu">
            Turnos
        </NavLink>
      </h5>
      <span className="text-white">|</span> {/* Barra entre los elementos */}
      <h5
        className="font-bold text-sky-700 hover:text-teal-600 cursor-pointer relative py-2 px-4 text-center"
        onMouseEnter={handlePersonMenuHover}
        onMouseLeave={handlePersonMenuLeave}
      >
        Karina
        {showPersonMenu && (
          <div className="absolute bg-white py-2 w-40 shadow-md z-10">
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100 text-black no-underline"
              to="/ViewProfile"
            >
              Mi perfil
            </NavLink>
            <button className="block px-4 hover:bg-gray-100 text-black text-sm">
              Cerrar Sesión
            </button>
          </div>
        )}
      </h5>
    </div>
  );
}
export default Nav;
