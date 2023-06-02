const obtenerEmailDeCookie = () => {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Verifica si la cookie contiene el nombre y valor que esperas
    if (cookie.startsWith('SESSIONID=')) {
      // Extrae el valor de la cookie
      const cookieValue = cookie.split('=')[1];
      // Aquí asumimos que el correo electrónico está después del guión ("-")
      const email = cookieValue.split('-')[1];
      console.log("Correo electrónico obtenido de la cookie:", email); // Agregar este console.log
      return email;
    }
  }

  return null; // Si no se encuentra la cookie o no contiene la información esperada
};

export default obtenerEmailDeCookie;