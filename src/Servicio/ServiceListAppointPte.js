const listAppointPte = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/paciente/turnosPacienteId/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Error al obtener la lista de elementos' };
    }
  };
  


  export const CancelarTurno = async (id) => {

    console.log("LLEGO BIEN?" + id)
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/paciente/cancelar-turno/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Error al cancelar el turno.');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Error al cancelar el turno' };
    }
  };
  
  
  export default listAppointPte;