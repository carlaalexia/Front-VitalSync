import React, { useState, useEffect, useContext } from "react";
import { BsFillCalendarCheckFill, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import listAppointPte from "../../Servicio/ServiceListAppointPte";
import { CancelarTurno } from "../../Servicio/ServiceListAppointPte";
import findMedId from "../../Servicio/ServiceFindMedId";
import Contexto from "../../context/ContextPerson/Contexto";

function ViewMedAppoint() {
  const { paciente } = useContext(Contexto);
  const [turnos, setTurnos] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [turnoEliminado, setTurnoEliminado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listAppointPte(paciente.id);
        console.log("Turnos:", data); // Agregar console.log aquí
        setTurnos(data);
        setFetchCompleted(true);
        setIsFetching(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCancelarTurno = async (id) => {
    try {
      const response = await CancelarTurno(id);
      console.log("se elimino!" + response);
      setTurnoEliminado(id);
      // Realiza acciones adicionales si es necesario
    } catch (error) {
      console.log("no se elimino :/" + error);
      // Maneja el error de cancelación del turno
    }
  };

  useEffect(() => {
    const fetchProfesionalData = async () => {
      if (!isFetching) return;
      if (!isFetching) return;

      const updatedTurnos = [];
      for (const turno of turnos) {
        try {
          const profesionalData = await findMedId(turno.id_profesional);
          const updatedTurno = {
            ...turno,
            nombre: profesionalData.nombre,
            apellido: profesionalData.apellido,
            especialidad: profesionalData.especialidad,
            apellido: profesionalData.apellido,
            especialidad: profesionalData.especialidad,
          };
          updatedTurnos.push(updatedTurno);
        } catch (error) {
          console.log(error);
          updatedTurnos.push(turno);
        }
      }

      setTurnos(updatedTurnos);
      setIsFetching(false);
      setIsFetching(false);
    };

    fetchProfesionalData();
  }, [fetchCompleted, isFetching]);

  return (
    <div className="flex flex-col items-center mt-8">
      <div>
        <h2 className="mb-10 text-3xl font-bold leading-9 tracking-tight text-cyan-900 animate__animated animate__fadeInLeft">
          Mis turnos
        </h2>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <table className="w-[900px] mb-8 bg-teal-50 border border-gray-300 drop-shadow-md">
          <thead>
            <tr className="bg-[#25a1af]">
              <th className="py-2 px-4 border-b border-r">Fecha</th>
              <th className="py-2 px-4 border-b border-r">Hora</th>
              <th className="py-2 px-4 border-b border-r">Doctor</th>
              <th className="py-2 px-4 border-b border-r">Especialidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {turnos.map(
              (turno, index) =>
                turno.id_turno !== turnoEliminado && (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-teal-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 border-b border-r text-center">
                      {turno.fecha}
                    </td>
                    <td className="py-2 px-4 border-b border-r text-center">
                      {turno.hora}
                    </td>
                    <td className="py-2 px-4 border-b border-r text-center">
                      {turno.nombre} {turno.apellido}
                    </td>
                    <td className="py-2 px-4 border-b border-r text-center">
                      {turno.especialidad}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="border-gray-700 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-bold py-2 px-4 rounded ml-10"
                        onClick={() => handleCancelarTurno(turno.id_turno)}
                      >
                        Cancelar turno
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewMedAppoint;
