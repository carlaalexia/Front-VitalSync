import obtenerIdDeCookie from "../context/PacientCookie";

const obtenerPacientePorId = async () => {
    const id = obtenerIdDeCookie();
    if (!id) {
      console.log('No se encontró la cookie o no contiene la información esperada');
      return { success: false, message: 'Error' };
    }
  
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
      return { success: false, message: 'Error' };
    }
  };
  
  export default obtenerPacientePorId;