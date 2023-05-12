import React from "react";
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";


/**
#d9ebec
#c7e3e4
#69b5c4
#7cabcb
#88c3b6
**/

function Login(){
    return(
        <div>
            <div>
            <img src="../assets/Logo.png"></img>
            <h1>VitalSync</h1>
            </div>
            <div>
                <div>
                    <h3>Inicia sesion en tu cuenta</h3>
                <input placeholder="Ingrese su usuario"></input>
                </div>
                
                <div>
                <input placeholder="Ingrese su contraseña"></input>
                </div>

                <div>
                    <h4>Recordarme</h4>
                    <h4>¿Olvidaste tu contraseña?</h4>
                </div>

                <div>
                    <button>Ingresar</button>
                    <href>Registrarse</href>
                </div>
            </div>
        </div>
    )
}

export default Login;