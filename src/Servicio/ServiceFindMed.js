async function FindMed(especialidad) {
  let url = `http://localhost:8080/vitalsync/profesional/especialidad`;

  if (especialidad !== "") {
    url += `?especialidad=${encodeURIComponent(especialidad)}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error al obtener los datos");
  }

  const medicos = await response.json();
  return medicos.map((medico) => `${medico.nombre} ${medico.apellido}`);
}

export default FindMed;
