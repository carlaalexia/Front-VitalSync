import { BsPersonSquare, BsFillHeartPulseFill } from "react-icons/bs";
import React, { useState, useContext, useEffect } from "react";
import FindMed from "../../Servicio/ServiceFindMed";
import ServiceCreateAppoint from "../../Servicio/ServicioScheduleAppoint";
import Contexto from "../../context/ContextPerson/Contexto";
import "../../CSS/createmed.css";

function CreateMedAppoint() {
  const { paciente } = useContext(Contexto);

  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");

  const [mostrarOpcionesTurnos, setMostrarOpcionesTurnos] = useState(false);
  const [actualizarTurnos, setActualizarTurnos] = useState(false);

  const [turnosDisponiblesFiltrados, setTurnosDisponiblesFiltrados] = useState(
    []
  );
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
        id_paciente: paciente.id,
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
      <div className="px-4 sm:px-0 mt-10 ml-24">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold leading-7 text-emerald-900 ml-7">
            "¡Bienvenido! Aquí puede solicitar sus turnos seleccionando la
            especialidad que desee."
          </h1>
          <div className="w-1/2 ml-28">
            <div className="sm:col-span-3">
              <label
                htmlFor="especialidad"
                className="flex items-center text-base font-semibold leading-6 text-emerald-900"
              >
                <span>
                  <BsFillHeartPulseFill className="mr-2" />
                </span>
                Especialidad
              </label>
              <div className="mt-2">
                <select
                  id="especialista"
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={especialidadSeleccionada}
                  onChange={handleEspecialidadChange}
                >
                  <option value="">Seleccionar</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Cirugía">Cirugía</option>
                  <option value="Clinica">Clinica Medica</option>
                  <option value="Dermatología">Dermatologia</option>
                  <option value="Gastroenterología">Gastroenterología</option>
                  <option value="Ginecologia">Ginecologia</option>
                  <option value="Infectología">Infectología</option>
                  <option value="Inmunología">Inmunología</option>
                  <option value="Neurología">Neurología</option>
                  <option value="Neumología">Neumología</option>
                  <option value="Nefrología">Nefrología</option>
                  <option value="Oftalmología">Oftalmología</option>
                  <option value="Odontología">Odontología</option>
                  <option value="Oncología">Oncología</option>
                  <option value="Otorrinolaringologia">
                    Otorrinolaringologia
                  </option>
                  <option value="Pediatría">Pediatría</option>
                  <option value="Psiquiatría">Psiquiatría</option>
                  <option value="Radiología">Radiología</option>
                  <option value="Reumatología">Reumatologia</option>
                  <option value="Traumatología">Traumatología</option>
                  <option value="Urología">Urología</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-14"></hr>

      <div className="relative mt-8 ml-20">
        {/* PRIMER DIV */}
        <div className="absolute top-0 left-0">
          <div>
            <table className="w-[630px] bg-teal-50 border border-gray-300 drop-shadow-md">
              <thead>
                <tr className="bg-[#25a1af]">
                  <th className="py-2 px-4 border-b border-r text-center sticky left-0 bg-[#25a1af] z-10 medico-column">
                    Medico
                  </th>
                  <th className="py-2 px-4 border-b border-r text-center sticky left-0 bg-[#25a1af] z-10 ubicacion-column">
                    Ubicacion
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {medicos.map((medico, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-teal-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 border-b border-r text-center medico-column">
                      {medico.nombre} {medico.apellido}
                    </td>
                    <td className="py-2 px-4 border-b border-r text-center ubicacion-column">
                      {medico.ubicacion}
                    </td>
                    <td className="flex justify-center">
                      {mostrarOpcionesTurnos &&
                      medicoSeleccionado?.id === medico.id ? (
                        <div>
                          <button
                            type="button"
                            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => setMostrarOpcionesTurnos(false)}
                          >
                            Cerrar
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

        {/**SEGUNDO DIV */}
        <div className="flex justify-end mt-10 mr-30">
          {mostrarOpcionesTurnos && medicoSeleccionado && (
            <div className="flex justify-center mr-40 bg-gray-300 bg-opacity-50 shadow-md p-4">
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
                  className="origin-bottom max-h-40 overflow-y-auto"
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
      </div>
    </div>
  );
}

export default CreateMedAppoint;
