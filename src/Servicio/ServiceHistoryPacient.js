export const VerHistorial = async (id) => {
    console.log("Quiero dormir" + id)
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

  export const AgregarEntrada = async (id, observacion) => {
    console.log("id ::" + id)
    console.log("comentario" + observacion)
    try {
        const response = await fetch(`http://localhost:8080/vitalsync/paciente/agregarHistorial/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: id, observaciones: observacion })
        });
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
        return { success: false, message: 'Error al agregar la observación' };
      }
    };
    
