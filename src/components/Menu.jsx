import React from "react";
import "../index.css";
import {
  BsFillPersonFill,
  BsFillCalendarCheckFill,
  BsFillCalendarPlusFill,
  BsArrowLeft,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="absolute top-0 left-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-[200px] w-auto"
          src="../assets/Logo.png"
          alt="LogoVitalSync"
        />
        <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900">
          ¡Bienvenido!
        </h2>
        <h3 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900">
          Selecciona una opción
        </h3>
      </div>

      <div className="mt-20">
        <div className="flex justify-center space-y-6">
          <div>
            <button className="mt-10 sm:mx-auto sm:w-[400px] text-center sm:text-lg md:text-xl rounded-xl p-5 bg-teal-50 drop-shadow-md cursor-pointer hover:bg-cyan-500">
              <span className="flex justify-center items-center">
                <BsFillPersonFill className="mr-2" />
                <span>
                  <Link to="/ViewProfile">Mi perfil</Link>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center space-y-6">
          <div>
            <button className="mt-10 sm:mx-auto sm:w-[400px] text-center sm:text-lg md:text-xl rounded-xl p-5 bg-teal-50 drop-shadow-md cursor-pointer hover:bg-cyan-500">
              <Link to={"/citas"}>
                <span className="flex justify-center items-center">
                  <BsFillCalendarCheckFill className="mr-2" />
                  <span>Mis turnos</span>
                </span>
              </Link>
            </button>
          </div>
        </div>

        <div className="flex justify-center space-y-6">
          <div>
            <button className="mt-10 sm:mx-auto sm:w-[400px] text-center sm:text-lg md:text-xl rounded-xl p-5 bg-teal-50 drop-shadow-md cursor-pointer hover:bg-cyan-500">
              <span className="flex justify-center items-center">
                <BsFillCalendarPlusFill className="mr-2" />
                <span>
                  <Link to="/CreateAppoint">Pedir turno</Link>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="fixed bottom-5 left-7">
          <button
            type="button"
            className="flex items-center text-md font-semibold leading-8 text-gray-900"
          >
            <span>
              <BsArrowLeft class="mr-2" />
            </span>
            <span>
              <Link to="/Login">Salir</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
