const addObservation = async (id, observation) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/paciente/turnos/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id, observacion: observation })
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Error al agregar la observación' };
    }
  };
  
  export default addObservation;
  