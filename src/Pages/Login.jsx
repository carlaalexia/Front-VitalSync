import React, { useState } from "react";
import {
  BsFillPersonFill,
  BsFillKeyFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { loginAndGetUserData } from "../Servicio/ServiceInicioSesion";
import AlertSweet from "../alerts/AlertUser";

function Login() {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const { loginResponse, userDataResponse } = await loginAndGetUserData(
        email,
        clave
      );
      if (userDataResponse.userName !== undefined) {

        // Inicio de sesión exitoso

        const userRole = userDataResponse.roles[0].authority;

        document.cookie = `SESSIONID=${email}-${userRole}; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/`;
        localStorage.setItem("userRole", userRole);

        // Imprimir la cookie
        console.log("cookie: " + document.cookie);
        console.log("mail: " + email)
        console.log("ROLE " + userRole)
        

        if (userRole === "ADMIN") {
          navigate("/homePage");
        } else if (userRole === "PROFESIONAL") {
          navigate("/homePage");
        } else if (userRole === "PACIENTE") {
          navigate("/homePage");
        }
        navigate("/homePage", { replace: true });
        window.location.reload()
      } else {
        // Credenciales incorrectas u otro error
        AlertSweet(3);
      }
    } catch (error) {
      // Error en la solicitud de inicio de sesión
      alert(error);
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-19 lg:px-9">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="block text-sm font-medium leading-4 mt-6 text-center">
          Inicia sesión en tu cuenta
        </h3>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usuario
              </label>
              <BsFillPersonFill className="justify-between mr-3" />
            </div>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-teal-700 focus:ring-2 focus:ring-inset focus:ring-emerald-700 text-center sm:leading-7"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <BsFillKeyFill className="justify-between mr-3" />
            </div>

            <div className="mt-2 relative">
              <input
                id="clave"
                type={showPassword ? "text" : "password"}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:leading-7"
                value={clave}
                onChange={(event) => {
                  setClave(event.target.value);
                }}
              />
              <button
                type="button" // Agrega el atributo type="button" aquí
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <BsFillEyeFill className="text-gray-600" />
                ) : (
                  <BsFillEyeSlashFill className="text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin}
            >
              Ingresar
            </button>
          </div>
        </form>

        <div className="text-sm mt-4 text-center">
          <a
            href="#"
            className="font-semibold text-cyan-950 hover:text-cyan-800"
          >
            ¿Olvidaste la contraseña?
          </a>
        </div>

        <p className="mt-7 text-center text-sm text-gray-500 mb-4">
          ¿No sos socio?
          <Link
            to="/CreateUser"
            className="font-semibold leading-6 text-cyan-950 hover:text-cyan-800"
          >
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
