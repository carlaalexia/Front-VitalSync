import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import addObservation from "../../Servicio/ServiceAddObservation";
import listHistoryPte from "../../Servicio/ServiceListHistoryPte";

const ViewHistory = () => {
  const { pacienteId } = useParams();
  const [historialMedico, setHistorialMedico] = useState([]);
  const [observacion, setObservacion] = useState("");

  //Llamada al historial medico del paciente por id
  useEffect(() => {
    const fetchHistorialMedico = async () => {
      try {
        // Realiza la llamada a tu servicio o API para obtener el historial médico del paciente con el pacienteId
        // Guarda los datos obtenidos en el estado
        const response = await listHistoryPte(pacienteId); // Reemplaza obtenerHistorialMedico con la llamada real a tu servicio

        setHistorialMedico(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistorialMedico();
  }, [pacienteId]);

  const handleAgregarObservacion = async () => {
    try {
      // Realiza la llamada a tu servicio o API para agregar la observación a la base de datos
      await addObservation(pacienteId, observacion); // Reemplaza agregarObservacion con la llamada real a tu servicio
      // Actualiza el estado o realiza cualquier otra acción necesaria después de agregar la observación
      // ...
      //se agrega lo que esta antes y lo de ahora
      setHistorialMedico((prevHistorialMedico) => ({
        ...prevHistorialMedico,
        observaciones: observacion,
      }));
      // Limpia el campo de observación
      setObservacion("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-cyan-900">Historial Médico</h2>
      <div className="bg-[#208e9a] bg-opacity-40 rounded-md shadow-md p-4">
        <div className="mb-4">
          <label className="font-bold">Fecha: </label>
          <span>{historialMedico.fecha}</span>
        </div>
        <hr className="my-4 border-gray-300" /> {/* Línea divisoria */}
        <div className="mb-4">
          <label className="font-bold">Nombre: </label>
          <span>{historialMedico.nombre}</span>
        </div>
        <hr className="my-4 border-gray-300" /> {/* Línea divisoria */}
        <div className="mb-4">
          <label className="font-bold">Apellido: </label>
          <span>{historialMedico.apellido}</span>
        </div>
        <hr className="my-4 border-gray-300" /> {/* Línea divisoria */}
        <div>
          <label className="font-bold">Observaciones: </label>
          <p>{historialMedico.observaciones}</p>
        </div>
        <hr className="my-4 border-gray-300" /> {/* Línea divisoria */}
        <div>
          <label className="font-bold">Agregar observacion: </label>
          <input
            id="observacion"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-teal-700 focus:ring-2 focus:ring-inset focus:ring-emerald-700 text-center sm:leading-7"
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="w-32 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleAgregarObservacion}
          >
            Agregar
          </button>
          <Link to={`/medTurnos`}>
            <button
              type="submit"
              className="w-32 ml-3 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Atras
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewHistory;
