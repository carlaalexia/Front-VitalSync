//todo: hacer la conexion con el controller
// Hay que hacer la conexion por el id para que traiga los turnos de la persona

const listAppoint = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/vitalsync/turnos/listar/${id}`, {
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
  
  export default listAppoint;