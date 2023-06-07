import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";

function Nav() {
  
  return (
    <div className="bg-zinc-700 flex justify-around items-center py-1 shadow-md">
      <img className="h-24 w-auto mb-2" src="./assets/Logo3.png" alt="VitalS" />
      {/* ACERCA DE */}
      <div className="font-bold text-white hover:text-teal-600 cursor-pointer relative">
        <NavLink className="mr-3" to="/homePage">Inicio</NavLink>
      </div>
      {/* INICIAR SESION */}
      <span className="text-white ml-1">|</span> {/* Barra entre los elementos */}
      <div className="font-bold text-white hover:text-teal-600 cursor-pointer relative">
        <NavLink to="/Login">Log in / Sign up</NavLink>
      </div>
    </div>
  );
}
export default Nav;
