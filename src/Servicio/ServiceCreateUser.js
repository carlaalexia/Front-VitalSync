import AlertSweet from "../alerts/AlertUser";

async function ServiceCreateUser(e) {
  let num = 0;
 
    const requesInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    };

    const res = await fetch("http://localhost:8080/vitalsync/usuario/create", requesInit);

    if (!res.ok) {
      AlertSweet(num = 8);
    } else {
      AlertSweet(num = 7);
    }
  
}


export default ServiceCreateUser;