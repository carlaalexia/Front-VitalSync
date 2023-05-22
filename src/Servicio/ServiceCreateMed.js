async function ServiceCreateMed(values) {
    try {
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };
  
      const res = await fetch("http://localhost:8080/vitalsync/profesional/create", requestInit);
  
      if (!res.ok) {
        throw new Error("Error al guardar el usuario");
      }
  
      // Aquí puedes realizar alguna acción adicional después de guardar exitosamente el usuario
    } catch (error) {
      console.log(error);
      // Manejo de errores: mostrar un mensaje de error, registrar el error, etc.
    }
  }
  
  
  
  export default ServiceCreateMed;