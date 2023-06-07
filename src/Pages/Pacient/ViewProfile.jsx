import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillPostcardHeartFill,
  BsArrowLeft,
  BsInfoCircleFill,
} from "react-icons/bs";
import { useLocation, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Contexto from "../../context/ContextPerson/Contexto";
import deletePaciente from "../../Servicio/ServiceDeletePacient";
import Swal from "sweetalert2";

function ViewProfile() {
  const location = useLocation();
  const selectedImage = location.state && location.state.selectedImage;
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userRole") !== null
  );

  const navigate = useNavigate();
  const { paciente, setPaciente } = useContext(Contexto);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    navigate("/homePage");
    window.location.reload();
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Seguro que desea eliminar la cuenta?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamar a la función de eliminación del paciente
        deletePaciente(paciente.id)
          .then(() => {
            Swal.fire({
              title: "Eliminado",
              text: "El paciente ha sido eliminado exitosamente",
              icon: "success",
            });
            setTimeout(() => {
              handleLogout(); // Cerrar sesión después de eliminar
            }, 2000);
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error",
              text: "Ocurrió un error al eliminar al paciente",
              icon: "error",
            });
          });
      }
    });
  };

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
        <div
          className="bg-[#c9ebe5] bg-opacity-60 rounded-lg p-9 mb-6"
          style={{
            paddingLeft: "20px",
            paddingRight: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-bold leading-6 text-emerald-900 flex text-center ml-3">
                <BsFillPersonFill className="mr-2 h-5 w-5" />
                Nombre completo
              </dt>
              <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {paciente && paciente.nombre} {paciente && paciente.apellido}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-bold leading-6 text-emerald-900 flex text-center ml-3">
                <BsFillEnvelopeFill className="mr-2 h-5 w-5" /> Email
              </dt>
              <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {paciente && paciente.usuario.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-bold leading-6 text-emerald-900 flex text-center ml-3">
                <BsFillTelephoneFill className="mr-2 h-5 w-5" /> Telefono
              </dt>
              <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {paciente && paciente.telefono}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-bold leading-6 text-emerald-900 flex text-center ml-3">
                <BsInfoCircleFill className="mr-2 h-5 w-5" /> Edad
              </dt>
              <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {paciente && paciente.edad}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-bold leading-6 text-emerald-900 flex text-center ml-3">
                <BsFillPostcardHeartFill className="mr-2 h-5 w-5" /> Obra social
              </dt>
              <dd className="mt-1 ml-20 text-sm font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
                {paciente && paciente.coberturaMedica}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 "></div>
          </dl>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-32 mr-5 mb-3">
        <div>
          <button
            type="submit"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link to="/Profile"> Editar </Link>
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="rounded-md bg-red-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
