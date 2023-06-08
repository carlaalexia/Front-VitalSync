import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Contexto from "../../context/ContextPerson/Contexto";
import listAppointMed from "../../Servicio/ServiceListAppointMed";
import findPacientId from "../../Servicio/ServiceFindPacientId";
import { VerHistorial } from "../../Servicio/ServiceHistoryPacient";

const History = () => {
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
    <div className="mt-11 ml-24 justify-center items-center">
      <div className="text-left">
        <h2 className="mb-10 ml-44 text-2xl font-black leading-9 tracking-tight text-cyan-900 animate_animated animate_fadeInLeft">
          Mis turnos
        </h2>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <table className="w-[1000px] bg-teal-50 border border-gray-300 drop-shadow-md mb-10">
          <thead>
            <tr className="bg-[#208e9a]">
              <th className="py-2 px-4 border-b border-r text-white">
                Paciente
              </th>
              <th className="py-2 px-4 border-b border-r text-white">Fecha</th>
              <th className="py-2 px-4 border-b border-r text-white">Hora</th>
              <th className="py-2 px-4 border-b border-r text-white">
                Concluido
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-teal-50" : ""}>
                <td className="py-2 px-4 border-b border-r text-center">
                  {turno.paciente}
                </td>
                <td className="py-2 px-4 border-b border-r text-center">
                  {turno.fecha}
                </td>
                <td className="py-2 px-4 border-b border-r text-center">
                  {turno.hora}
                </td>
                <td className="py-2 px-4 border-b border-r">
                  <input
                    type="checkbox"
                    checked={turno.concluido}
                    className="ml-12"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <Link
                    to={`/historial/${turno.id_paciente}`}
                    className="block w-full border-gray-700 bg-gray-200 hover:bg-[#25a1af] text-gray-700 hover:text-white font-bold py-2 px-4 rounded text-center"
                    style={{ minWidth: "100px" }}
                  >
                    Agregar entrada
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default History;
