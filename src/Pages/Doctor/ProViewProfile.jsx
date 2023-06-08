import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillPostcardHeartFill,
  BsArrowLeft,
  BsInfoCircleFill,
  BsFillGeoAltFill,
} from "react-icons/bs";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbReportMoney } from "react-icons/tb";
import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Contexto from "../../context/ContextPerson/Contexto";

function ProViewProfile() {
  const location = useLocation();
  const selectedImage = location.state && location.state.selectedImage;

  const { profesional, setProfesional } = useContext(Contexto);

  return (
    <div>
      <div className="flex items-center justify-start">
        <div className="col-span-full flex items-center justify-center gap-x-3 mt-2 flex-grow">
          <img
            src={profesional.foto}
            className="w-20 h-20 rounded-full mx-auto"
            alt="Profile"
          />
        </div>
      </div>

      <div>
        <div className="mt-6 border-t border-gray-100 flex justify-center">
          <div
            className="bg-[#c9ebe5] bg-opacity-60 rounded-lg p-9 mb-6"
            style={{
              paddingLeft: "20px",
              paddingRight: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center ml-5">
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <BsFillPersonFill className="mr-2 h-5 w-5" />
                  Nombre completo
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {profesional && profesional.nombre}{" "}
                  {profesional && profesional.apellido}
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center ml-5">
                <dt className="text-base font-bold leading-6 text-emerald-900 flex place-items-center">
                  <BsFillEnvelopeFill className="mr-2 h-5 w-5" /> Email
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {profesional && profesional.usuario.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center ml-5">
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <BsFillTelephoneFill className="mr-2 h-5 w-5" /> Telefono
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {profesional && profesional.telefono}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center
              ml-5"
              >
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <BsInfoCircleFill className="mr-2 h-5 w-5" /> Especialidad
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {profesional && profesional.especialidad}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center
              ml-5"
              >
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <BsFillPostcardHeartFill className="mr-2 h-5 w-5" /> Matricula
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                  {profesional && profesional.matricula}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center
              ml-5"
              >
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <BsFillGeoAltFill className="mr-2 h-5 w-5" /> Ubicación
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                  {profesional && profesional.ubicacion}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center
              ml-5"
              >
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <TbReportMoney className="mr-2 h-5 w-5" /> Honorario
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                  {profesional && profesional.honorario}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center
              ml-5"
              >
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <HiOutlineBuildingOffice2 className="mr-2 h-5 w-5" /> Presencial
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                  {profesional && (profesional.presencial ? "Si" : "No")}
                </dd>
              </div>
              <div
                className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 text-center
              ml-5"
              >
                <dt className="text-base font-bold leading-6 text-emerald-900 flex items-center">
                  <MdOutlineBroadcastOnPersonal className="mr-2 h-5 w-5" /> Telemedicina
                </dt>
                <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                  {profesional && (profesional.telemedicina ? "Si" : "No")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProViewProfile;
