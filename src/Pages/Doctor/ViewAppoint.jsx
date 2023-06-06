import React, { useState } from "react";
import { BsFillCalendarCheckFill, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import listAppoint from "../../Servicio/ServiceListAppoint";
import { deleteAppoint } from "../../Servicio/ServiceDeleteAppoint";

function ViewAppoint() {
      const [setTurnos] = useState([]);
      const [historialMedico, setHistorialMedico] = useState(null);

      const handleVerHistorial = async (pacienteId) => {
        try {
          const historial = await listAppoint(pacienteId); // Llama a la función listAppoint pasando el ID del paciente seleccionado
          setHistorialMedico(historial);
        } catch (error) {
          console.log(error);
        }
      };

  /*
    todo: descomentar el codigo y eliminar el array turno cuando este hecha la conexion con el back;
    Conectar con service de med appoint
    Eliminar linea 8 cuando este la conexion con el back

          const [turnos, setTurnos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listAppoint();
        setTurnos(data); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
}, []);*/

  const handleDeleteTurno = async (appointId) => {
    try {
      await deleteAppoint(appointId, setTurnos);
    } catch (error) {
      console.log(error);
    }
  };

  const turnos = [
    {
        id: 1,
      fecha: "2023-05-15",
      hora: "14h",
      paciente: "Carla Pérez",
    },
    {
        id: 2,
      fecha: "2023-05-17",
      hora: "17h",
      paciente: "María Gómez",
    },
    {
        id: 3,
      fecha: "2023-05-20",      
      hora: "15h",
      paciente: "Carlos López",
    },
    {
        id: 4,
      fecha: "2023-05-20",
      hora: "10h",
      paciente: "Carlos López",
    },
  ];

  return (
    <div className="mt-20 ml-72 justify-center items-center">
      <div className="text-left">
        <h2 className="mb-10 text-2xl font-bold leading-9 tracking-tight text-cyan-900 animate__animated animate__fadeInLeft">
          Mis turnos
        </h2>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <table className="w-[700px] bg-teal-50 border border-gray-300 drop-shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Hora</th>
              <th className="py-2 px-4 border-b">Paciente</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-teal-50" : ""}>
                <td className="py-2 px-4 border-b">{turno.fecha}</td>
                <td className="py-2 px-4 border-b">{turno.hora}</td>
                <td className="py-2 px-4 border-b">{turno.paciente}</td>
                <button className="border-gray-700 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={() => handleVerHistorial(turno.id)}
                   >
                    Historial clinico
                  </button>
                <td className="py-2 px-4 border-b">
                  <button className="border-gray-700 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteTurno(turno.id)}
                   >
                    Cancelar turno
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {historialMedico && (
  <div className="mt-10 mx-auto max-w-md">
    <h2 className="text-2xl font-bold mb-4">Historial Médico</h2>
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="mb-4">
        <label className="font-bold">Nombre: </label>
        <span>{historialMedico.nombre}</span>
      </div>
      <div className="mb-4">
        <label className="font-bold">Apellido: </label>
        <span>{historialMedico.apellido}</span>
      </div>
      <div>
        <label className="font-bold">Observaciones: </label>
        <p>{historialMedico.observaciones}</p>
      </div>
      <div>
        <label className="font-bold">Agregar observacion: </label>
        <input 
          id="observacion"
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-teal-700 focus:ring-2 focus:ring-inset focus:ring-emerald-700 text-center sm:leading-7"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-32 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Agregar
        </button>
        <button
            className="w-32 rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
            onClick={() => setHistorialMedico(null)}
          >
            Cerrar
        </button>
      </div>
      
    </div>
  </div>
)}

    </div>
  );
  
}

export default ViewAppoint;