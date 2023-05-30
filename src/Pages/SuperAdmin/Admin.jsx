import "../../index.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import React from "react";
import ServiceCreateMed from "../../Servicio/ServiceCreateMed";

const Admin = () => {
  const pruebaSubmit = (e) => {
    e.preventDefault();
    values.nombre = values.nombre;
    values.apellido = values.apellido;
    values.usuario = { email: values.email, clave: values.clave };
    values.especialidad = values.especialidad;
    ServiceCreateMed(values);
    handleReset();
    console.log(values);
  };

  const { handleBlur, handleChange, values, handleReset } = useFormik({
    initialValues: {
      email: "",
      nombre: "",
      apellido: "",
      clave: "",
      especialidad: "",
    },
  });

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-6 py-12 lg:px-8">
      <div className="w-[670px] p-5 border bg-teal-50 mx-auto h-full rounded-xl mb-4 drop-shadow-md">
        <h3 className="text-lg text-center font-bold mb-4">
          Crear Profesional
        </h3>
        <form className="space-y-6" onSubmit={pruebaSubmit} autoComplete="off">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Nombre
              </label>
            </div>
            <div className="mt-2">
              <input
                id="nombre"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 text-center"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <label
                htmlFor="apellido"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Apellido
              </label>
            </div>
            <div className="mt-2">
              <input
                id="apellido"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 text-center"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 text-center"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <label
                htmlFor="especialidad"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Especialidad
              </label>
            </div>
            <div className="mt-2">
              <select
                id="especialidad"
                className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={values.especialidad}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Seleccionar</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Oculista">Oculista</option>
                <option value="Ginecologia">Ginecologia</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Dermatología">Dermatologia</option>
                <option value="Reumatologo">Reumatologia</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <label
                htmlFor="clave"
                className="block text-sm font-medium leading-6 text-cyan-900"
              >
                Contraseña temporal
              </label>
            </div>
            <div className="mt-2">
              <input
                id="clave"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 text-center"
                value={values.clave}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex w-32 justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
