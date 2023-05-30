import axios from "axios";
import AlertSweet from "../alerts/AlertUser";

export async function loginAndGetUserData(email, clave) {
  try {
    // Realizar la solicitud de inicio de sesión
    const loginResponse = await axios.post(
      "http://localhost:8080/vitalsync/auth/login",
      {
        email: email,
        clave: clave,
      },
      {
        withCredentials: true, // Habilitar el envío de cookies
      }
    );

    // Obtener la información del usuario de la respuesta de inicio de sesión
    const userData = loginResponse.data;

    // Devolver tanto los datos de inicio de sesión como los datos del usuario
    return {
      loginResponse: loginResponse.data,
      userDataResponse: userData,
    };
  } catch (error) {
    console.error("Error:", error); // Imprime el error en la consola
    throw error;
  }
}
