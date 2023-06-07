import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import listAppointMed from "../../Servicio/ServiceListAppointMed";
import { deleteAppoint } from "../../Servicio/ServiceDeleteAppoint";
import obtenerIdDeCookie from "../../context/MedCookie";

function ViewAppoint() {
    const [turnos, setTurnos] = useState([]);
    //const [selectedTurnoId, setSelectedTurnoId] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            // Obtén el ID del profesional desde la cookie
            const id = obtenerIdDeCookie();
    
                                                                                // Llama a la función listAppointMed pasando el ID del profesional
            const data = await listAppointMed(29);                                   //cambiar el 29 por el id obtenido arriba (modo de prueba)
            if (Array.isArray(data)) {
                console.log(data);
                setTurnos(data);
              } else {
                console.log('Los datos devueltos no son un array:', data);
              }
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

      /*const handleToggleEstado = async (medicoId) => {
        try {
          await toggleMedicoEstado(medicoId, setMedicos);
        } catch (error) {
          console.log(error);
        }
      };*/

  const handleDeleteTurno = async (appointId) => {
    try {
      await deleteAppoint(appointId, setTurnos);
    } catch (error) {
      console.log(error);
    }
  };

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
              <th className="py-2 px-4 border-b">Paciente</th>
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Hora</th>
              <th className="py-2 px-4 border-b">Concluido</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(turnos) && turnos.map((turno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-teal-50" : ""}>
                <td className="py-2 px-4 border-b">{turno.paciente}</td>
                <td className="py-2 px-4 border-b">{turno.fecha}</td>
                <td className="py-2 px-4 border-b">{turno.hora}</td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={turno.concluido}
                    //onChange={() => handleToggleEstado(turno.id)}
                    className="ml-8"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                    
                    <Link
                      to={`/historial/${turno.id_paciente}`}
                      className="border-gray-700 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-bold py-2 px-4 rounded"
                    >
                      Historial médico
                    </Link>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="border-gray-700 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteTurno(turno.id_turno)}
                   >
                    Cancelar turno
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default ViewAppoint;