import React, { useState } from "react";
import {
  BsFillPersonFill,
  BsFillKeyFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Servicio/ServiceInicioSesion";
import AlertSweet from "../alerts/AlertUser";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(event) {
    let num = 0;
    event.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response);
      if (response.message === "Email not exits") {
        alert("Email no existe");
      } else if (response.message === "Login Success") {
        AlertSweet((num = 1));
        navigate("/Menu");
      } else {
        AlertSweet((num = 3));
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-19 lg:px-9">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-48 w-auto"
          src="../assets/Logo.png"
          alt="VitalS"
        />
        <h2 className="mt-1 text-center text-3xl font-bold leading-7 tracking-tight text-emerald-900">
          VitalSync
        </h2>
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
                id="password"
                type={showPassword ? "text" : "password"}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:leading-7"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
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

          <div class="flex justify-center">
            <button
              type="submit"
              className="w-32 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleLogin}
            >
              Ingresar
            </button>
          </div>
        </form>

        <div class="text-sm mt-4 text-center">
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
