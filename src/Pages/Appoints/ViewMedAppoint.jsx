import React, { useState, useEffect, useContext } from 'react';
import { BsFillCalendarCheckFill, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import listAppointPte from '../../Servicio/ServiceListAppointPte';
import findMedId from '../../Servicio/ServiceFindMedId';
import Contexto from '../../context/ContextPerson/Contexto';

function ViewMedAppoint() {

  const { paciente } = useContext(Contexto);
  
  const [turnos, setTurnos] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false); // Nuevo estado


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listAppointPte(paciente.id); 
        setTurnos(data); 
        setFetchCompleted(true); // Marcar la búsqueda como completada

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProfesionalData = async () => {
      if (!fetchCompleted) return; // Si la búsqueda no está completada, no realizar más llamadas

      const updatedTurnos = [];
      for (const turno of turnos) {
        try {
          const profesionalData = await findMedId(turno.id_profesional);
          const updatedTurno = {
            ...turno,
            nombre: profesionalData.nombre,
            especialidad: profesionalData.especialidad
          };
          updatedTurnos.push(updatedTurno);
        } catch (error) {
          console.log(error);
          updatedTurnos.push(turno);
        }
      }

      setTurnos(updatedTurnos);
    };

    fetchProfesionalData();
  }, [turnos, fetchCompleted]); // <-- Arreglo de dependencias vacío

  return (
    <div className="mt-20 ml-72">
      <div className="text-left">
        <h2 className="mb-10 text-2xl font-bold leading-9 tracking-tight text-cyan-900 animate__animated animate__fadeInLeft">
          Mis turnos
        </h2>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <table className="w-[900px] bg-teal-50 border border-gray-300 drop-shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Hora</th>
              <th className="py-2 px-4 border-b">Doctor</th>
              <th className="py-2 px-4 border-b">Especialidad</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-teal-50" : ""}>
                <td className="py-2 px-4 border-b">{turno.fecha}</td>
                <td className="py-2 px-4 border-b">{turno.hora}</td>
                <td className="py-2 px-4 border-b">{turno.nombre}</td>
                <td className="py-2 px-4 border-b">{turno.especialidad}</td>
                <td className="py-2 px-4 border-b">
                  <button className="border-gray-700 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800 font-bold py-2 px-4 rounded" >
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

export default ViewMedAppoint;
