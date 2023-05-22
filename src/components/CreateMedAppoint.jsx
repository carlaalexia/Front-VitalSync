import {
  BsPersonSquare,
  BsFillHeartPulseFill,
  BsArrowLeft,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FindMed from "../Servicio/ServiceFindMed";

function CreateMedAppoint() {
  const [medicos, setMedicos] = useState([]);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");

  const handleEspecialidadChange = async (event) => {
    const especialidad = event.target.value;
    setEspecialidadSeleccionada(especialidad);

    try {
      const medicosEncontrados = await FindMed(especialidad);
      setMedicos(medicosEncontrados);

      console.log("Datos obtenidos:", medicosEncontrados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setMedicos([]);
    }
  };

  return (
    <div>
      <div className="px-4 sm:px-0 mt-10">
        <h1 className="text-base font-bold leading-7 text-emerald-900 ml-7">
          Pedir turno
        </h1>
      </div>

      <div className="flex justify-between mt-16">
        <div className="w-1/2 ml-28">
          <div className="sm:col-span-3">
            <label
              for="especialidad"
              className="flex items-center text-sm font-medium leading-6 text-emerald-900"
            >
              <span>
                <BsFillHeartPulseFill className="mr-2" />
              </span>
              Especialidad
            </label>
            <div className="mt-2">
              <select
                id="especialista"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={especialidadSeleccionada}
                onChange={handleEspecialidadChange}
              >
                <option value="">Seleccionar</option>
                <option value="Cardiología">Cardiología</option>
                <option value="Oculista">Oculista</option>
                <option value="Ginegolía">Ginegolía</option>
                <option value="Pediatría">Pediatría</option>
                <option value="Dermatología">Dermatologia</option>
                <option value="Reumatologo">Reumatologia</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="sm:col-span-3">
            <label
              for="medico"
              className="flex items-center text-sm font-medium leading-6 text-emerald-900"
            >
              <span>
                <BsPersonSquare className="mr-2" />
              </span>
              Médico/a
            </label>
            <div className="mt-2">
              <select
                id="medico"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option disabled selected value="">
                  Seleccionar
                </option>
                <option>Dr. Juan Pérez</option>
                <option>Dra. María Gómez</option>
                <option>Dr. Carlos López</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 mr-20 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buscar
          </button>
        </div>
      </div>

      <div>
        <table className="mt-4">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico, index) => (
              <tr key={index}>
                <td>{medico.nombre}</td>
                <td>{medico.apellido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fixed bottom-5 left-7">
        <button
          type="button"
          className="flex items-center text-md font-semibold leading-8 text-gray-900"
        >
          <span>
            <BsArrowLeft className="mr-2" />
          </span>
          <span>
            <Link to="/Menu">Salir</Link>
          </span>
        </button>
      </div>
    </div>
  );
}

export default CreateMedAppoint;
