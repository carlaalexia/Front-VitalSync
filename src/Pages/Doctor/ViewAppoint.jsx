import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import listAppointMed from "../../Servicio/ServiceListAppointMed";
import Contexto from "../../context/ContextPerson/Contexto";
import findPacientId from "../../Servicio/ServiceFindPacientId";

function ViewAppoint() {
  const [turnos, setTurnos] = useState([]);
  const { profesional } = useContext(Contexto);

  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listAppointMed(profesional.id);
        if (Array.isArray(data)) {
          setTurnos(data);
          setFetchCompleted(true);
          setIsFetching(true);
        } else {
          console.log("Los datos devueltos no son un array:", data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPacienteData = async () => {
      if (isFetching) {
        const updatedTurnos = [];
        for (const turno of turnos) {
          try {
            const pacienteData = await findPacientId(turno.id_paciente);
            const updatedTurno = {
              ...turno,
              paciente: `${pacienteData.nombre} ${pacienteData.apellido}`,
            };
            updatedTurnos.push(updatedTurno);
          } catch (error) {
            console.log(error);
            updatedTurnos.push(turno);
          }
        }
        setTurnos(updatedTurnos);
        setIsFetching(false);
      }
    };
    fetchPacienteData();
  }, [isFetching, turnos]);

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
            {turnos.map((turno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-teal-50" : ""}>
                <td className="py-2 px-4 border-b">{turno.paciente}</td>
                <td className="py-2 px-4 border-b">{turno.fecha}</td>
                <td className="py-2 px-4 border-b">{turno.hora}</td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={turno.concluido}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAppoint;
