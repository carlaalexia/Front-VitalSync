const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/vitalsync/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return { success: false, message: 'Error al iniciar sesión' };
    }
  };
  
  export default login;