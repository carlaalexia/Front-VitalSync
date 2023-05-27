export const deleteMedico = async (medicoId, setMedicos) => {
  try {
    const response = await fetch(`http://localhost:8080/vitalsync/profesional/eliminar/${medicoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      // Eliminación exitosa
      // Actualiza la lista de médicos eliminando el médico correspondiente
      setMedicos((prevMedicos) =>
        prevMedicos.filter((medico) => medico.id !== medicoId)
      );
    } else {
      // Error en la eliminación
      console.log('Error al eliminar el médico');
    }
  } catch (error) {
    console.log(error);
  }
};