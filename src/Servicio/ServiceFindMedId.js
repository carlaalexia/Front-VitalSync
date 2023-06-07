const findMedId = async (idMedico) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/profesional/${idMedico}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Error al obtener el médico' };
    }
  };
  
export default findMedId;
  