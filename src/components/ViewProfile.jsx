import {
  BsFillPersonFill,
  BsFillCameraFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillPostcardHeartFill,
  BsArrowLeft
} from "react-icons/bs";
import { Link } from "react-router-dom";

function ViewProfile() {
  return (
    <div>
      <div className="flex items-center justify-start">
        <div className="px-4 sm:px-0 mt-10">
          <h3 className="text-base font-bold leading-7 text-emerald-900 ml-7">Perfil</h3>
        </div>
        <div className="col-span-full flex items-center justify-center gap-x-3 mt-2 flex-grow">
          <img
            src="./assets/gatos.jpg"
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 flex justify-center">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex items-center">
              <BsFillPersonFill className="mr-2 h-5 w-5" />
              Nombre completo
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Carla Marquez
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex place-items-center">
              <BsFillEnvelopeFill className="mr-2 h-5 w-5" /> Email
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              mcarlaalexia@gmail.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex items-center">
              <BsFillTelephoneFill className="mr-2 h-5 w-5" /> Telefono
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              1160323634
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-emerald-900 flex items-center">
              <BsFillPostcardHeartFill className="mr-2 h-5 w-5" /> Obra social
            </dt>
            <dd className="mt-1 ml-20 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ">
              Medife
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 "></div>
        </dl>
      </div>

      <div className="mt-1 flex items-center justify-center gap-x-6 mr-5">
        <button
          type="submit"
          className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Link to="/Profile">Editar</Link>
        </button>
      </div>

      <div className="fixed bottom-5 left-7">
        <button
          type="button"
          className="flex items-center text-md font-semibold leading-8 text-gray-900"
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

export default ViewProfile;
