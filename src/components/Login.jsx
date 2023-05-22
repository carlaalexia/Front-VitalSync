import React, { useState } from "react";
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import login from "../Servicio/ServiceInicioSesion";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();
    const { username, password } = form;
    const response = await login(username, password);
    if (response.success) {
      const usuario = response.usuario;
      alert(`Bienvenido ${usuario.nombre} ${usuario.apellido}`);
      setForm({ ...form, usuario }); // Actualizar el estado utilizando setForm
      window.location.href = './menu';
    } else {
      setForm({ ...form, error: response.message }); // Actualizar el estado con el mensaje de error
    }
  };  

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
              <BsFillPersonFill className="justify-between mr-10" />
            </div>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-teal-700 focus:ring-2 focus:ring-inset focus:ring-emerald-700 text-center sm:leading-7"
                value={form.username}
                onChange={handleChange}
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
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              class="w-32 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={iniciarSesion}
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
