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
            </div>
            <div>
                <div>
                <input>Ingrese su usuario</input>
                </div>
                
                <div>
                <input>Ingrese su contraseña</input>
                </div>
            </div>
        </div>
    )
}

export default Login;