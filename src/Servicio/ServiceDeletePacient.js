const deletePaciente = async (pacienteId) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/paciente/eliminar/${pacienteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        // Eliminación exitosa
      } else {
        // Error en la eliminación
        console.log('Error al eliminar el médico');
      }
    } catch (error) {
      console.log(error);
    }
  };


  export default deletePaciente;