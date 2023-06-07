import obtenerEmailDeCookie from "../context/PacientCookie";

const buscarPacientePorEmail = async (email) => {

    const response = await fetch(
      `http://localhost:8080/vitalsync/paciente/usuario/${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );



    if (response.ok) {
      const paciente = await response.json();
      return { success: true, data: paciente }; // Devolver el paciente dentro de un objeto con success: true
    } else {
      return { success: false, message: "Error al buscar por correo electrónico" }; // Devolver un objeto con success: false y un mensaje de error
    }

};

 export const obtenerPacientePorEmail = async () => {
  const email = obtenerEmailDeCookie();
  if (!email) {
    //console.log("No se encontró la cookie o no contiene la información esperada");
    return { success: false, message: "Error" };
  }

  try {
    const paciente = await buscarPacientePorEmail(email);
    if (paciente.success) {
     // console.log("Data:" + paciente.data);
    } else {
      console.log("mensaje: " + paciente.message);
    }
    return paciente;
  } catch (error) {
    return { success: false, message: "Error" };
  }
};


export default obtenerPacientePorEmail;
