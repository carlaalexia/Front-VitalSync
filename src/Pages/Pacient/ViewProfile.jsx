import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillPostcardHeartFill,
  BsArrowLeft,
  BsInfoCircleFill
} from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Contexto from "../../context/ContextPerson/Contexto";


function ViewProfile() {
  const location = useLocation();
  const selectedImage = location.state && location.state.selectedImage;
  
  const { paciente, setPaciente } = useContext(Contexto);
  
  return (
    <div>
      <div className="flex items-center justify-start">
        <div className="col-span-full flex items-center justify-center gap-x-3 mt-2 flex-grow">
          {selectedImage && (
            <img
              src={selectedImage}
              className="w-20 h-20 rounded-full mx-auto"
              alt="Profile"
            />
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 flex justify-center">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex items-center">
              <BsFillPersonFill className="mr-2 h-5 w-5" />
              Nombre completo
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {paciente && paciente.nombre}  {paciente && paciente.apellido}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex place-items-center">
              <BsFillEnvelopeFill className="mr-2 h-5 w-5" /> Email
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              { paciente && paciente.usuario.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex items-center">
              <BsFillTelephoneFill className="mr-2 h-5 w-5" /> Telefono
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {paciente && paciente.telefono}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex items-center">
              <BsInfoCircleFill className="mr-2 h-5 w-5" /> Edad
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {paciente && paciente.edad}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex items-center">
              <BsFillPostcardHeartFill className="mr-2 h-5 w-5" /> Obra social
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
            {paciente && paciente.coberturaMedica}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 "></div>
        </dl>
      </div>

      <div className="mt-1 flex items-center justify-center gap-x-6 mr-5">
        <button
          type="submit"
          className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link to="/Profile">Editar</Link>
        </button>
      </div>
    </div>
  );
}

export default ViewProfile;
