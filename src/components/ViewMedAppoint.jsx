import React from "react";
import '../index.css';
import { BsFillCalendarCheckFill, BsArrowLeft} from "react-icons/bs";
import { Link } from "react-router-dom";

function ViewMedAppoint() {

    const turnos = [
        { fecha: '2023-05-15', doctor: 'Dr. Juan Pérez', especialidad: 'Cardiología' },
        { fecha: '2023-05-17', doctor: 'Dra. María Gómez', especialidad: 'Pediatría' },
        { fecha: '2023-05-20', doctor: 'Dr. Carlos López', especialidad: 'Dermatología' },
        { fecha: '2023-05-20', doctor: 'Dr. Carlos López', especialidad: 'Dermatología' },
        
      ];

      console.log(turnos);


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="absolute top-0 left-0 sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-[200px] w-auto"
                    src="../assets/Logo.png"
                    alt="LogoVitalSync"
                />
                <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900">
                Mis turnos 
                </h2>
            </div>
        <div className="max-w-screen-lg">
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
                <tr key={index} className={index % 2 === 0 ? 'bg-teal-50' : ''}>
                  <td className="py-2 px-4 border-b">{turno.fecha}</td>
                  <td className="py-2 px-4 border-b">{turno.doctor}</td>
                  <td className="py-2 px-4 border-b">{turno.especialidad}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div class="fixed bottom-5 left-7">
          <button
            type="button"
            class="flex items-center text-md font-semibold leading-8 text-gray-900"
          >
            <span>
              <BsArrowLeft class="mr-2" />
            </span>
            <span>
              <Link to="/Menu">Salir</Link>
            </span>
          </button>
        </div>
        </div>
      </div>
  );
}

export default ViewMedAppoint;