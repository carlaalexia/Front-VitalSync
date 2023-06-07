import AlertSweet from "../alerts/AlertUser";

async function ServiceCreateAppoint(values) {
  let num = 0;

  async function construirURL(id_medico, id_turno, id_paciente) {
    const baseUrl = "http://localhost:8080/vitalsync/paciente/reservar-turno";
    const queryParams = `?id_medico=${id_medico}&id_turno=${id_turno}&id_paciente=${id_paciente}`;
    return baseUrl + queryParams;
  }

  try {
    const { id_medico, id_turno, id_paciente } = values;
    const url = await construirURL(id_medico, id_turno, id_paciente);

    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_medico, id_turno, id_paciente }),
    };

    const res = await fetch(url, requestInit);

    if (!res.ok) {
      AlertSweet((num = 8));
    } else {
      AlertSweet((num = 6));
    }

    // Aquí puedes realizar alguna acción adicional después de guardar exitosamente el usuario
  } catch (error) {
    console.log(error);
    // Manejo de errores: mostrar un mensaje de error, registrar el error, etc.
  }
}

export default ServiceCreateAppoint;