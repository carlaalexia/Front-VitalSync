import AlertSweet from "../alerts/AlertUser";

export async function agregarComentario(values) {

  let num = 0;

  try {
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const res = await fetch("http://localhost:8080/vitalsync/profesional/agregarComentario", requestInit);

    if (!res.ok) {
      AlertSweet(num = 11);
    } else {
      AlertSweet(num = 12);
    }

    // Aquí puedes realizar alguna acción adicional después de guardar exitosamente el comentario
  } catch (error) {
    console.log(error);
    // Manejo de errores: mostrar un mensaje de error, registrar el error, etc.
  }
}

export const comentariosProfesional = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/vitalsync/profesional/comentarios/${encodeURIComponent(id)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        const comentarios = await response.json();
    
        return { success: true, data: comentarios };
        
      } else {
        throw new Error("Error al obtener los comentarios del profesional");
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error al obtener los comentarios del profesional" };
    }

  };


  export const eliminarComentario = async (email, comentarios) => {
    let num = 0;
    try {
      const response = await fetch(
        `http://localhost:8080/vitalsync/profesional/eliminarComentario`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, comentarios }),
        }
      );
  
      if (response.ok) {
        AlertSweet(num = 13);
        return { success: true, message: "Comentario eliminado." };
      } else {
        throw new Error("Error al eliminar el comentario");
      }
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error al eliminar el comentario" };
    }
  };


