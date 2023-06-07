import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import ServicioEditarProfesional from "../../Servicio/ServiceProfesionalEdit";
import obtenerProfesionalPorId from "../../Servicio/ServiceProfesionalId";
import Contexto from "../../context/ContextPerson/Contexto";

const EditProfesional = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { profesional, setProfesional } = useContext(Contexto);
  const [fotoSeleccionada, setFotoSeleciconada] = useState("");

  const listaFotos = [
    {
      value:
        "https://cdn.icon-icons.com/icons2/944/PNG/512/medical-29_icon-icons.com_73943.png",
      label: "Foto 1",
    },
    {
      value:
        "https://www.universal-assistance.com/uploads/libreria/icon-med-2.svg",
      label: "Foto 2",
    },
    {
      value: "https://cdn-icons-png.flaticon.com/512/3304/3304567.png",
      label: "Foto 3",
    },
    {
      value:
        "https://e7.pngegg.com/pngimages/65/330/png-clipart-physician-medicine-computer-icons-health-care-therapy-doctor-icon.png",
      label: "Foto 4",
    },
    {
      value:
        "https://cdn.icon-icons.com/icons2/2122/PNG/512/doctor_medical_avatar_people_icon_131305.png",
      label: "Foto 5",
    },
  ];

  useEffect(() => {
    const fetchProfesional = async () => {
      try {
        const response = await obtenerProfesionalPorId(id);
        if (response.success) {
          setProfesional(response.data);
          formik.setValues({
            nombre: response.data.nombre,
            apellido: response.data.apellido,
            telefono: response.data.telefono,
            especialidad: response.data.especialidad,
            ubicacion: response.data.ubicacion,
            honorario: response.data.honorario,
            matricula: response.data.matricula,
            foto: response.data.foto,
            estado: response.data.estado,
          });
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfesional();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      especialidad: "",
      ubicacion: "",
      honorario: "",
      matricula: "",
      foto: "",
      estado: null,
    },
    onSubmit: async (values) => {
      const datosEditar = {
        nombre: values.nombre,
        apellido: values.apellido,
        telefono: values.telefono,
        especialidad: values.especialidad,
        ubicacion: values.ubicacion,
        honorario: values.honorario,
        matricula: values.matricula,
        foto: values.foto,
        estado: values.estado,
      };

      try {
        await ServicioEditarProfesional(datosEditar, id);
         navigate("/Alist");
        // Realiza cualquier otra acción necesaria después de editar el profesional
      } catch (error) {
        console.error("Error al editar el profesional:", error);
        // Maneja el error de manera adecuada
      }
    },
  });
  return (
    <div className="bg-[#b1e8df] bg-opacity-60 rounded-lg p-9">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-bold leading-10 text-emerald-900 text-center">
              Información del Profesional
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3 w-1/2 ml-44 ">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="last-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    value={formik.values.apellido}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="telefono"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Telefono
                </label>
                <div className="mt-2">
                  <input
                    id="telefono"
                    name="telefono"
                    type="text"
                    value={formik.values.telefono}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="telefono"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Ubicacion
                </label>
                <div className="mt-2">
                  <input
                    id="ubicacion"
                    name="ubicacion"
                    type="text"
                    value={formik.values.ubicacion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="telefono"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Matricula
                </label>
                <div className="mt-2">
                  <input
                    id="matricula"
                    name="matricula"
                    type="text"
                    value={formik.values.matricula}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="telefono"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Honorario
                </label>
                <div className="mt-2">
                  <input
                    id="honorario"
                    name="honorario"
                    type="text"
                    value={formik.values.honorario}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  />
                </div>
              </div>
              <div className="sm:col-span-3 w-1/2 ml-44">
                <label
                  for="telefono"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Foto
                </label>
                <div className="mt-2">
                  <select
                    id="foto"
                    name="foto"
                    value={formik.values.foto}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2"
                  >
                    <option className="bg-gray-300" value="" disabled={formik.values.foto !== ""}>
                      Seleccione
                    </option>
                    {listaFotos.map((foto, index) => (
                      
                      <option key={index} value={foto.value}>
                        {foto.label}
                      </option>
                    ))}
                  </select>
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
            <Link to="/Alist">Cancelar</Link>
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
