import axios from "axios";

export async function login(email, password) {
  try {
    const response = await axios.post(
      "http://localhost:8080/vitalsync/usuario/login",
      {
        email: email,
        clave: password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}