import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import ServicioEditarPersona from "../../Servicio/ServicePacientEdit";
import Contexto from "../../context/ContextPerson/Contexto";

const EditProfile = () => {
  const { paciente, setPaciente } = useContext(Contexto);

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [nombre, setNombre] = useState(paciente.nombre);
  const [apellido, setApellido] = useState(paciente.apellido);
  const [telefono, setTelefono] = useState(paciente.telefono);
  const [edad, setEdad] = useState(paciente.edad);
  const [coberturaMedica, setCoberturaMedica] = useState(
    paciente.coberturaMedica
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSave = (event) => {
    event.preventDefault();
    navigate("/ViewProfile", { state: { selectedImage: selectedImage } });
    if (selectedImage) {
      console.log("La imagen se ha guardado correctamente.");
    } else {
      console.log("No se ha seleccionado ninguna imagen.");
    }
    pruebaSubmit(coberturaMedica); // Pasar coberturaMedica como argumento
  };

  const pruebaSubmit = async (coberturaMedica) => {
    console.log("Entrando a pruebaSubmit");
    const editarPersona = {
      ...paciente,
      id: paciente.id,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      edad: edad,
      coberturaMedica: coberturaMedica, // Usar el valor actual del estado coberturaMedica
    };
    console.log("Datos:", editarPersona);
    console.log("ID:", paciente.id);

    try {
      await ServicioEditarPersona(editarPersona, paciente.id);
      
      handleReset();
      setPaciente(editarPersona);
    } catch (error) {
      console.error("Error:", error);
    }

    
  };

  const { handleBlur, handleChange, values, errors, touched, handleReset } =
    useFormik({
      initialValues: {
        id: paciente.id,
        nombre: "",
        apellido: "",
        telefono: "",
        edad: "",
        coberturaMedica: "",
      },
      handleChange: (e) => {
        if (e.target.name === "coberturaMedica") {
          setCoberturaMedica(e.target.value);
        } else {
          handleChange(e);
        }
      },
    });
  return (
    <div>
      <form
        id="profile-form"
        onSubmit={(event) => {
          handleSave(event);
          pruebaSubmit(event);
        }}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  for="cover-photo"
                  className="block text-sm font-medium leading-6 text-emerald-900 text-center"
                >
                  Foto de perfil
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        className="mx-auto h-12 w-12 text-gray-300"
                        alt="Selected"
                      />
                    ) : (
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-cyan-950 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-cyan-900"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

              <div className="sm:col-span-3 ml-28 ">
                <label
                  for="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Obra Social
                </label>
                <div className="mt-2 mb-12">
                  <select
                    name="coberturaMedica"
                    value={coberturaMedica}
                    onChange={(e) => setCoberturaMedica(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900  focus:ring-indigo-600 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="Medife">Medife</option>
                    <option value="OSDE">OSDE</option>
                    <option value="IOMA">IOMA</option>
                    <option value="Sutter">Sutter</option>
                    <option value="CoverMed">CoverMed</option>
                    <option value="Pami">Pami</option>
                    <option value="Galeno">Galeno</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="telefono"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Edad
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                    value={edad}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setEdad(e.target.value);
                    }}
                    onBlur={handleBlur}
                    name="edad"
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
            <Link to="/ViewProfile">Cancelar</Link>
          </button>

          <button
            type="submit"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-none focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-2"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
