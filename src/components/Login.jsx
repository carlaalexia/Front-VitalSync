import React from "react";
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Login() {
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
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usuario
              </label>
              <BsFillPersonFill className="justify-between mr-10" />
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-teal-700 focus:ring-2 focus:ring-inset focus:ring-emerald-700 text-center sm:leading-7"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <BsFillKeyFill className="justify-between mr-10" />
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:leading-7"
              />
            </div>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              class="w-32 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            <Link to="/Menu">
              Ingresar
              </Link>
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

        <p className="mt-7 text-center text-sm text-gray-500">
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
