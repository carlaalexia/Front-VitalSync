import React from "react";
import { BsFillCalendarCheckFill, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { listAppoint } from "../../Servicio/ServiceListAppoint";

function ViewMedAppoint() {

  /*
    todo: descomentar el codigo y eliminar el array turno cuando este hecha la conexion con el back;
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
}, []);

  const handleDeleteTurno = async (appointId) => {
    try {
      await deleteAppoint(appointId, setTurnos);
    } catch (error) {
      console.log(error);
    }
  };*/

  const turnos = [
    {
      fecha: "2023-05-15",
      hora: "14h",
      doctor: "Dr. Juan Pérez",
      especialidad: "Cardiología",
    },
    {
      fecha: "2023-05-17",
      hora: "17h",
      doctor: "Dra. María Gómez",
      especialidad: "Pediatría",
    },
    {
      fecha: "2023-05-20",      
      hora: "15h",
      doctor: "Dr. Carlos López",
      especialidad: "Dermatología",
    },
    {
      fecha: "2023-05-20",
      hora: "10h",
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
                <td className="py-2 px-4 border-b">{turno.doctor}</td>
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