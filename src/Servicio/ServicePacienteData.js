import obtenerEmailDeCookie from "../context/PacientCookie";

const buscarPorEmail = async (email) => {
  try {
    const response = await fetch(`http://localhost:8080/vitalsync/buscar?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const paciente = await response.json();
      return paciente;
    } else {
      throw new Error('Error al buscar por correo electrónico');
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error' };
  }
};

const obtenerPacientePorEmail = async () => {
  const email = obtenerEmailDeCookie();
  if (!email) {
    console.log('No se encontró la cookie o no contiene la información esperada');
    return { success: false, message: 'Error' };
  }

  try {
    const response = await buscarPorEmail(email);
    if (response.success) {
      const paciente = response.data;
      // Aquí puedes hacer lo que necesites con los datos del paciente
      console.log(paciente);
    } else {
      console.log(response.message);
    }
    return response;
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error' };
  }
};

export default obtenerPacientePorEmail;