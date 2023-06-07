import AlertSweet from "../alerts/AlertUser";

export const puntuarProfesional = async (id, puntuacion) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vitalsync/profesional/puntuar/${encodeURIComponent(id)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(puntuacion),
        }
      );
  
      if (response.ok) {
        return { success: true, message: "Puntuación registrada." };
      } else {
        throw new Error("Error al puntuar al profesional");
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error al puntuar al profesional" };
    }
  };
  

  export const PuntuacionGeneral = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vitalsync/profesional/puntuacion/${encodeURIComponent(id)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        const puntuacion = await response.json();
    
        return { success: true, data: puntuacion };
        
      } else {
        throw new Error("Error al obtener la puntuacion del profesional");
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error al obtener la puntuacion del profesional" };
    }

  };
