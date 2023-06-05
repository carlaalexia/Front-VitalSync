import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import ServicioEditarProfesional from "../../Servicio/ServiceProfesionalEdit";
import Contexto from "../../context/ContextPerson/Contexto";

const EditProfesional = () => {
  const { profesional, setProfesional } = useContext(Contexto);

  const navigate = useNavigate();
  
  const [nombre, setNombre] = useState(profesional.nombre);
  const [apellido, setApellido] = useState(profesional.apellido);
  const [telefono, setTelefono] = useState(profesional.telefono);


  const pruebaSubmit = async () => {
    console.log("Entrando a pruebaSubmit");
    const editarPersona = {
      ...profesional,
      id: profesional.id,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
    };
    console.log("Datos:", editarPersona);
    console.log("ID:", profesional.id);

    try {
      await ServicioEditarProfesional(editarPersona, profesional.id);
      
      handleReset();
      setProfesional(editarPersona);
    } catch (error) {
      console.error("Error:", error);
    }

    
  };

  const { handleBlur, handleChange, values, errors, touched, handleReset } =
    useFormik({
      initialValues: {
        id: profesional.id,
        nombre: "",
        apellido: "",
        telefono: ""
      },
    });
  return (
    <div>
      <form onSubmit={pruebaSubmit}>
        <div className="space-y-12">
          

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-emerald-900 text-center">
              Información Personal
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3 w-1/2 ml-28 ">
                <label
                  for="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                    value={nombre}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setNombre(e.target.value);
                    }}
                    onBlur={handleBlur}
                    name="nombre"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                    value={apellido}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setApellido(e.target.value);
                    }}
                    onBlur={handleBlur}
                    name="apellido"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-28">
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="telefono"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Telefono
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                    value={telefono}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setTelefono(e.target.value);
                    }}
                    onBlur={handleBlur}
                    name="telefono"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Link to="/ListMed">Cancelar</Link>
          </button>

          <button
            type="submit"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-none focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-2"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfesional;
