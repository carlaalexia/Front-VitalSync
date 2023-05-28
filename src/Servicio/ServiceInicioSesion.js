import axios from "axios";

export async function login(email, password) {
  try {
    const response = await axios.post(
      "http://localhost:8080/vitalsync/auth/login",
      {
        email: email,
        clave: password,
      }
    );

    console.log("Respuesta:", response); // Imprime la respuesta completa en la consola

    if (response.status === 200) {
      const role = response.data; // Obtiene el rol del usuario desde la respuesta
      console.log("Rol del usuario:", role); // Imprime el rol del usuario en la consola
      return role;
    } else {
      throw new Error("Error en la solicitud");
    }
  } catch (error) {
    console.error("Error:", error); // Imprime el error en la consola
    throw error;
  }
}
