import obtenerEmailDeCookie from "../context/PacientCookie";

const buscarProfesionalPorEmail = async (email) => {

    const response = await fetch(
      `http://localhost:8080/vitalsync/profesional/usuario/${encodeURIComponent(email)}`,
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

 export const obtenerProfesionalPorEmail = async () => {
  const email = obtenerEmailDeCookie();
  if (!email) {
    console.log(
      "No se encontró la cookie o no contiene la información esperada"
    );
    return { success: false, message: "Error" };
  }

  try {
    const profesional = await buscarProfesionalPorEmail(email);
    if (profesional.success) {
      console.log("Data:" + profesional.data);
    } else {
      console.log("mensaje: " + profesional.message);
    }
    return profesional;
  } catch (error) {
    console.log("error 2:" + error);
    return { success: false, message: "Error" };
  }
};


export default obtenerProfesionalPorEmail;
