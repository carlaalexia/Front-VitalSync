import '../../index.css';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import React from 'react';
import ServiceCreateMed from "../../Servicio/ServiceCreateMed";


const Admin = () =>{
  

  const pruebaSubmit = (e) => {
    e.preventDefault();
      values.nombre = values.nombre;
      values.apellido = values.apellido;
      values.usuario = {email: values.email, clave: values.clave};
      values.especialidad = values.especialidad;
      ServiceCreateMed(values);
      handleReset();
      console.log(values);
  };

  const { handleBlur, handleChange, values, handleReset } = 
  useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      clave: "",
      especialidad: ""
    },
  });

  const medicos = [
    { mail: 'doctor1@gmail.com', nombre: 'Juan', apellido: 'Pérez', especialidad: 'Cardiología' },
    { mail: 'doctor2@gmail.com', nombre: 'María', apellido: 'Gómez', especialidad: 'Pediatría' },
    { mail: 'doctor3@gmail.com', nombre: 'Carlos', apellido: 'López', especialidad: 'Dermatología' },
    { mail: 'doctor4@gmail.com', nombre: 'Armando', apellido: 'Gutierrez', especialidad: 'Dermatología' },
  ];

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-6 py-12 lg:px-8">
      
        <div className="w-[670px] p-5 border bg-teal-50 mx-auto h-full rounded-xl mb-4 drop-shadow-md">
          <h3 className="text-lg font-bold mb-4">Crear Profesional</h3>
          <form className="space-y-6" onSubmit={pruebaSubmit} autoComplete="off">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-cyan-900">
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  value={values.usuario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-cyan-900">
                  Nombre
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="nombre"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <label htmlFor="apellido" className="block text-sm font-medium leading-6 text-cyan-900">
                  Apellido
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="apellido"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  value={values.apellido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <label htmlFor="especialidad" className="block text-sm font-medium leading-6 text-cyan-900">
                  Especialidad
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="especialidad"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  value={values.especialidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <label htmlFor="clave" className="block text-sm font-medium leading-6 text-cyan-900">
                  Contraseña temporal
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="clave"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
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

        

      <p className="mt-10 text-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
        <Link to="/Login" className="underline focus:outline-none">
          Cerrar sesion
        </Link>
      </p>
    </div>
  );
}

export default Admin;