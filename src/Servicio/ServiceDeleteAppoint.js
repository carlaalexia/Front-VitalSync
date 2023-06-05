export const deleteAppoint = async (appointId, setTurnos) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/turnos/eliminar/${appointId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        // Eliminación exitosa
        // Actualiza la lista de turnos eliminando el turno correspondiente
        setTurnos((prevTurnos) =>
            prevTurnos.filter((turno) => turno.id !== appointId)
        );
      } else {
        // Error en la eliminación
        console.log('Error al cancelar el turno');
      }
    } catch (error) {
      console.log(error);
    }
  };