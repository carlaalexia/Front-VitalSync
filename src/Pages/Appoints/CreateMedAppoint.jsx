import {
  BsPersonSquare,
  BsFillHeartPulseFill,
} from "react-icons/bs";
import React, { useState, useContext, useEffect } from "react";
import FindMed from "../../Servicio/ServiceFindMed";
import ServiceCreateAppoint from "../../Servicio/ServicioScheduleAppoint";
import Contexto from "../../context/ContextPerson/Contexto";

function CreateMedAppoint() {
  const { paciente } = useContext(Contexto);
  
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");

  const [mostrarOpcionesTurnos, setMostrarOpcionesTurnos] = useState(false);
  const [actualizarTurnos, setActualizarTurnos] = useState(false);

  const [turnosDisponiblesFiltrados, setTurnosDisponiblesFiltrados] = useState([]);
  const [turnosDisponibles, setTurnosDisponibles] = useState([]);
  const [medicos, setMedicos] = useState([]);

  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);
  const [medicoSeleccionado, setMedicoSeleccionado] = useState(null);

  const handleEspecialidadChange = async (event) => {
    const especialidad = event.target.value;
    setEspecialidadSeleccionada(especialidad);

    try {
      const medicosEncontrados = await FindMed(especialidad);
      setMedicos(medicosEncontrados);
      console.log("Datos obtenidos:", medicosEncontrados);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setMedicos([]);
    }
  };

 const handleMostrarOpcionesTurnos = async (medicoSeleccionado) => {
  setTurnoSeleccionado(null);
  setTurnosDisponibles([]);
  setMostrarOpcionesTurnos(true);
  // Guardar el médico seleccionado en el estado
  setMedicoSeleccionado(medicoSeleccionado); // Asegúrate de agregar esta línea

  try {
    const response = await fetch(
      `http://localhost:8080/vitalsync/profesional/turnos-disponibles/${medicoSeleccionado.id}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener los turnos disponibles");
    }
    const turnosDisponibles = await response.json();
    setTurnosDisponibles(turnosDisponibles);
    setTurnosDisponiblesFiltrados(turnosDisponibles);
    console.log(turnosDisponibles);
  } catch (error) {
    console.error("Error al obtener los turnos disponibles:", error);
    setTurnosDisponibles([]);
  }
};

  const handleCerrarOpcionesTurnos = () => {
    setMostrarOpcionesTurnos(false);
    setTurnoSeleccionado(null);
  };

  const handleGuardarTurno = async () => {
    try {
      const values = {
        id_medico: medicoSeleccionado.id,
        id_turno: turnoSeleccionado.id_turno,
        id_paciente: paciente.id
      };
      console.log(values);
  
      await ServiceCreateAppoint(values);
      handleCerrarOpcionesTurnos();
      setActualizarTurnos(true);
    } catch (error) {
      console.error("Error al guardar el turno:", error);
      // Manejo de errores: mostrar un mensaje de error, registrar el error, etc.
    }
  };

  useEffect(() => {
    const obtenerTurnosDisponibles = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/vitalsync/profesional/turnos-disponibles/${medicoSeleccionado.id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los turnos disponibles");
        }
        const turnosDisponibles = await response.json();
        setTurnosDisponibles(turnosDisponibles);
        setTurnosDisponiblesFiltrados(turnosDisponibles);
        setActualizarTurnos(false);
      } catch (error) {
        console.error("Error al obtener los turnos disponibles:", error);
        setTurnosDisponibles([]);
        setActualizarTurnos(false);
      }
    };
  
    if (actualizarTurnos && medicoSeleccionado) {
      obtenerTurnosDisponibles();
    }
  }, [actualizarTurnos, medicoSeleccionado]);

  return (
    <div>
      <div className="px-4 sm:px-0 mt-10">
        <h1 className="text-base font-bold leading-7 text-emerald-900 ml-7">
          Pedir turno
        </h1>
      </div>

      <div className="flex justify-between mt-16">
        <div className="w-1/2 ml-28">
          <div className="sm:col-span-3">
            <label
              for="especialidad"
              className="flex items-center text-sm font-medium leading-6 text-emerald-900"
            >
              <span>
                <BsFillHeartPulseFill className="mr-2" />
              </span>
              Especialidad
            </label>
            <div className="mt-2">
              <select
                id="especialista"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={especialidadSeleccionada}
                onChange={handleEspecialidadChange}
              >
                <option value="">Seleccionar</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Oculista">Oculista</option>
                <option value="Ginecologia">Ginecologia</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Dermatología">Dermatologia</option>
                <option value="Reumatologo">Reumatologia</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="sm:col-span-3">
            <label
              for="medico"
              className="flex items-center text-sm font-medium leading-6 text-emerald-900"
            >
              <span>
                <BsPersonSquare className="mr-2" />
              </span>
              Médico/a
            </label>
            <div className="mt-2">
            <select
                id="medico"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                
              >
                <option disabled selected value="">
                  Seleccionar
                </option>
                {medicos.map((medico) => (
                  <option key={medico.id} value={medico.id}>
                    {medico.nombre} {medico.apellido}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 mr-20 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-20 mr-40">
        <div>
          <table className="w-[630px] bg-teal-50 border border-gray-300 drop-shadow-md">
            <thead>
              <tr className="bg-cyan-600">
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">Apellido</th>
              </tr>
            </thead>
            <tbody>
              {medicos.map((medico, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-teal-50" : ""}>
                  <td className="py-2 px-4 border-b text-center">{medico.nombre}</td>
                  <td className="py-2 px-4 border-b text-center">{medico.apellido}</td>
                  <td>
                    {mostrarOpcionesTurnos && medicoSeleccionado?.id === medico.id ? (
                      <div>
                        <button
                          type="button"
                          className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={() => setMostrarOpcionesTurnos(false)}
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={() => handleMostrarOpcionesTurnos(medico)}
                        >
                          Agendar
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => handleMostrarOpcionesTurnos(medico)}
                      >
                        Agendar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {mostrarOpcionesTurnos && medicoSeleccionado && (
  <div className="flex justify-center mt-8 mr-40">
    <div className="flex gap-x-4">
      <select
        id="turno"
        value={turnoSeleccionado ? turnoSeleccionado.id_turno : ""}
        onChange={(event) => {
          const selectedTurno = turnosDisponibles.find(
            (turno) => turno.id_turno === parseInt(event.target.value)
          );
          setTurnoSeleccionado(selectedTurno);
        }}
      >
        <option disabled selected value="">
          Seleccionar turno
        </option>
        {turnosDisponiblesFiltrados.map((turno) => (
          <option key={turno.id_turno} value={turno.id_turno}>
            {turno.fecha} | {turno.hora}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleGuardarTurno}
      >
        Guardar Turno
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default CreateMedAppoint;
