import React, { useState, useEffect } from "react";
import Contexto from "./Contexto";
import obtenerPacientePorEmail from "../../Servicio/ServicePacienteData";
import obtenerProfesionalPorEmail from "../../Servicio/ServiceProfesionalData";

const Provider = ({ children }) => {
  
  
  const [paciente, setPaciente] = useState(null); // Estado local para almacenar los datos del paciente
  const [profesional, setProfesional] = useState(null);

  useEffect(() => {
    const obtenerPaciente = async () => {
      const paciente = await obtenerPacientePorEmail();
  
      if (paciente.success) {
        setPaciente(paciente.data);
      } else {
        console.log("????" + paciente.message);
      }
    };
  
    obtenerPaciente();
  }, []);

  useEffect(() => {
    const obtenerProfesional = async () => {
      const profesional = await obtenerProfesionalPorEmail();
  
      if (profesional.success) {
        setProfesional(profesional.data);
      } else {
        console.log("????" + profesional.message);
      }
    };
  
    obtenerProfesional();
  }, []);

  return (
    <Contexto.Provider value={{ paciente, setPaciente, profesional, setProfesional }}>
      {children}
    </Contexto.Provider>
  );
};

export default Provider;