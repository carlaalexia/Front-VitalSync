import '../index.css';
import { BsFillLockFill, BsFillEnvelopeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import ServiceCreateUser from "../Servicio/ServiceCreateUser";


const CreateUser = () =>{
  
  const navigate = useNavigate();

  const pruebaSubmit = (e) => {
    e.preventDefault();
      values.email = values.email;
      values.clave = values.clave;
      ServiceCreateUser(values);
      navigate('/Login');
      handleReset();
      console.log(values);
  };

  const { handleBlur, handleChange, values, handleReset } = 
  useFormik({
    initialValues: {
      id: null,
      email: "",
      clave: "",
      repeatPassword: ""
    },
  });

    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="absolute top-0 left-0 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[200px] w-auto"
            src="../assets/Logo.png"
            alt="VitalSync"
          />
          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900">
            ¡Hola! 
          </h2>
          <h3 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900">Crea tu cuenta</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl p-10 bg-teal-50 drop-shadow-md">
          <form className="space-y-6" onSubmit={pruebaSubmit} autoComplete="off">
            <div>
                <div className="flex items-center justify-between"> 
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-cyan-900">
                    Ingresa tu email
                    </label> 
                    <BsFillEnvelopeFill/>
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

            <div>
              <div className="flex items-center justify-between">
                
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-cyan-900">
                  Ingresa una contraseña
                </label>
                <BsFillLockFill/>
              </div>
              <div className="mt-2">
                <input
                  id="clave"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 text-center"
                  value={values.clave}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="repeatPassword" className="block text-sm font-medium leading-6 text-cyan-900">
                  Repetir contraseña
                </label>
                <BsFillLockFill/>
              </div>
              <div className="mt-2">
                <input
                  id="repeatPassword"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 text-center"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                type="submit"
                className="flex w-32 justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                Crear cuenta
              </button>
            </div>
          </form>

            <p className="mt-10 text-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                <Link to="/Login"className="underline focus:outline-none">
                    Cancelar
                </Link>
            </p>
        </div>
      </div>
    )
}

export default CreateUser;