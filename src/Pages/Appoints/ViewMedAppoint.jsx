import React from "react";
import { BsFillCalendarCheckFill, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function ViewMedAppoint() {
  const turnos = [
    {
      fecha: "2023-05-15",
      doctor: "Dr. Juan Pérez",
      especialidad: "Cardiología",
    },
    {
      fecha: "2023-05-17",
      doctor: "Dra. María Gómez",
      especialidad: "Pediatría",
    },
    {
      fecha: "2023-05-20",
      doctor: "Dr. Carlos López",
      especialidad: "Dermatología",
    },
    {
      fecha: "2023-05-20",
      doctor: "Dr. Carlos López",
      especialidad: "Dermatología",
    },
  ];

  return (
    <div className="mt-20 ml-72">
      <div className="text-left">
        <h2 className="mb-10 text-2xl font-bold leading-9 tracking-tight text-cyan-900 animate__animated animate__fadeInLeft">
          Mis turnos
        </h2>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <table className="w-[630px] bg-teal-50 border border-gray-300 drop-shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Doctor</th>
              <th className="py-2 px-4 border-b">Especialidad</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-teal-50" : ""}>
                <td className="py-2 px-4 border-b">{turno.fecha}</td>
                <td className="py-2 px-4 border-b">{turno.doctor}</td>
                <td className="py-2 px-4 border-b">{turno.especialidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default ViewMedAppoint;