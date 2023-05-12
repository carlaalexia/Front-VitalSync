import React from "react";
import '../index.css';
import { BsFillLockFill, BsFillEnvelopeFill } from "react-icons/bs";


function CreateUser(){
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="absolute top-0 left-0 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[200px] w-auto"
            src="../assets/Logo.png"
            alt="Your Company"
          />
          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900">
            ¡Hola! 
          </h2>
          <h3 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-900">Crea tu cuenta</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl p-10 bg-teal-50 drop-shadow-md">
          <form className="space-y-6" action="#" method="POST">
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
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
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
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-cyan-900">
                  Repite la contraseña
                </label>
                <BsFillLockFill/>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                Crear cuenta
              </button>
            </div>
          </form>

            <p className="mt-10 text-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                <button className="underline focus:outline-none">
                    Cancelar
                </button>
            </p>
        </div>
      </div>
    )
}

export default CreateUser;
