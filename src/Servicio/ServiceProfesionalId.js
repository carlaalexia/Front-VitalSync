const obtenerProfesionalPorId = async (Id) => {

    const response = await fetch(
      `http://localhost:8080/vitalsync/profesional/${encodeURIComponent(Id)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );



    if (response.ok) {
      const profesional = await response.json();
      return { success: true, data: profesional }; // Devolver el profesional dentro de un objeto con success: true
    } else {
      return { success: false, message: "Error al buscar por correo electrónico" }; // Devolver un objeto con success: false y un mensaje de error
    }

};

export default obtenerProfesionalPorId;