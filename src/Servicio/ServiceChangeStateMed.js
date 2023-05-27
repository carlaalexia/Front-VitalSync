export const toggleMedicoEstado = async (medicoId, setMedicos) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/profesional/modificarEstado/${medicoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        // Cambio de estado exitoso
        // Actualiza la lista de médicos cambiando el estado del médico correspondiente
        setMedicos((prevMedicos) =>
          prevMedicos.map((medico) =>
            medico.id === medicoId ? { ...medico, estado: !medico.estado } : medico
          )
        );
      } else {
        // Error en el cambio de estado
        console.log('Error al cambiar el estado del médico');
      }
    } catch (error) {
      console.log(error);
    }
  };