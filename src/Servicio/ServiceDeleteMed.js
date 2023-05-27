export const deleteMedico = async (medicoId, setMedicos) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/profesional/eliminar/${medicoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ estado: false }) // Envía el nuevo estado como parámetro en el cuerpo de la solicitud
      });
  
      if (response.ok) {
        // Cambio de estado exitoso
        // Actualiza la lista de médicos cambiando el estado del médico correspondiente a false
        setMedicos((prevMedicos) =>
          prevMedicos.map((medico) =>
            medico.id === medicoId ? { ...medico, estado: false } : medico
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