const listHistoryPte = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/paciente/historial/${id}`, {
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
  
  export default listHistoryPte;