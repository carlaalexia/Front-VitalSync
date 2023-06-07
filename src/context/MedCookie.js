const obtenerIdDeCookie = () => {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('SESSIONID=')) {
        const cookieValue = cookie.split('=')[1];
        const userId = cookieValue.split('-')[1]; // Obtener el ID en lugar del correo electrónico
        console.log("ID obtenido de la cookie:", userId);
        return userId;
      }
    }
  
    return null;
  };
  
  export default obtenerIdDeCookie;