async function ServiceCreateUser(e) {
  try {
    const requesInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    };

    const res = await fetch("http://localhost:8080/vitalsync/usuario/create", requesInit);

    if (!res.ok) {
      throw new Error("Error al guardar el usuario");
    }

    // Aquí puedes realizar alguna acción adicional después de guardar exitosamente la persona
  } catch (error) {
    console.log(error);
    // Manejo de errores: mostrar un mensaje de error, registrar el error, etc.
  }
}


export default ServiceCreateUser;