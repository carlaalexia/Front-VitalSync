const findPacientId = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/paciente/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Error al obtener el paciente' };
    }
  };
  
export default findPacientId;