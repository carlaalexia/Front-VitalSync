const ServicioEditarPersona = async (datos, pacienteId) => {

  const requestInit = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(`http://localhost:8080/vitalsync/paciente/editar/${pacienteId}`, requestInit);
    if (!response.ok) {
      throw new Error("Algo salió mal");
    } else {
     // console.log("ola")
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default ServicioEditarPersona;
