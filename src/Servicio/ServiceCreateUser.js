import AlertSweet from "../alerts/AlertUser";

async function ServiceCreateUser(values) {
  let num = 0;
  try {
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const res = await fetch("http://localhost:8080/vitalsync/paciente/create", requestInit)
    

    if (!res.ok) {
      AlertSweet(num = 8);
    } else {
      AlertSweet(num = 7);
    }

    // Aquí puedes realizar alguna acción adicional después de guardar exitosamente la persona
  } catch (error) {
    console.log(error);
  }
}

export default ServiceCreateUser;