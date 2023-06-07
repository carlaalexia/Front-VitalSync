const obtenerEmailDeCookie = () => {
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('SESSIONID=')) {
      const cookieValue = cookie.split('=')[1];
      const userName = cookieValue.split('-')[0]; // Obtener el correo electrónico en lugar del rol
     // console.log("Correo electrónico obtenido de la cookie:", userName);
      return userName;
    }
  }

  return null;
};

export default obtenerEmailDeCookie;