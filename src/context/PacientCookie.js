const obtenerIdDeCookie = () => {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Verifica si la cookie contiene el nombre y valor que esperas
    if (cookie.startsWith('SESSIONID=')) {
      // Extrae el ID de la cookie
      const id = cookie.split('=')[1];
      return id;
    }
  }

  return null; // Si no se encuentra la cookie o no contiene la información esperada
};

// Ejemplo de uso:
const id = obtenerIdDeCookie();
if (id) {
  console.log('ID de la persona:', id);
  // Aquí puedes utilizar el ID para hacer la consulta al servicio
} else {
  console.log('No se encontró la cookie o no contiene la información esperada');
}

export default obtenerIdDeCookie;