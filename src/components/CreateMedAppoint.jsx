import {
  BsPersonSquare,
  BsFillHeartPulseFill,
  BsArrowLeft,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function CreateMedAppoint() {
  return (
    <div>
      <div class="px-4 sm:px-0 mt-10">
        <h1 class="text-base font-bold leading-7 text-emerald-900 ml-7">
          Pedir turno
        </h1>
      </div>

      <div class="flex justify-between mt-16">
        <div class="w-1/2 ml-28">
          <div class="sm:col-span-3">
            <label
              for="especialista"
              class="flex items-center text-sm font-medium leading-6 text-emerald-900"
            >
              <span>
                <BsFillHeartPulseFill class="mr-2" />
              </span>
              Especialidad
            </label>
            <div class="mt-2">
              <select
                id="especialista"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option disabled selected value="">
                  Seleccionar
                </option>
                <option>Cardiología</option>
                <option>Oculista</option>
                <option>Ginegolía</option>
                <option>Pediatría</option>
                <option>Dermatología</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-1/2 ">
          <div class="sm:col-span-3">
            <label
              for="medico"
              class="flex items-center text-sm font-medium leading-6 text-emerald-900"
            >
              <span>
                <BsPersonSquare class="mr-2" />
              </span>
              Médico/a
            </label>
            <div class="mt-2">
              <select
                id="medico"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option disabled selected value="">
                  Seleccionar
                </option>
                <option>Dr. Juan Pérez</option>
                <option>Dra. María Gómez</option>
                <option>Dr. Carlos López</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mt-8 mr-20 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            class="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buscar
          </button>
        </div>
      </div>

      <div class="fixed bottom-5 left-7">
        <button
          type="button"
          class="flex items-center text-sm font-semibold leading-8 text-gray-900"
        >
          <span>
            <BsArrowLeft class="mr-2" />
          </span>
          <span>
            <Link to="/Menu">Salir</Link>
          </span>
        </button>
      </div>
    </div>
  );
}

export default CreateMedAppoint;
