import React from 'react';

const HistorialMedico = () => {
  const paciente = {
    nombre: 'Juan',
    apellido: 'Pérez',
    historial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada hendrerit turpis, nec eleifend tellus tincidunt non. Sed gravida urna ac diam consectetur, auctor aliquet elit rutrum. Proin nec ligula sed leo pharetra gravida. Ut eget tincidunt elit. Nulla vitae dolor eu lorem bibendum iaculis a sed erat. Proin malesuada elementum est, ac placerat felis fringilla ut. Mauris ut fringilla enim, in egestas mauris.'
  };

  return (
    <div className="mt-10 mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-4">Historial Médico</h2>
      <div className="bg-white rounded-md shadow-md p-4">
        <div className="mb-4">
          <label className="font-bold">Nombre: </label>
          <span>{paciente.nombre}</span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Apellido: </label>
          <span>{paciente.apellido}</span>
        </div>
        <div>
          <label className="font-bold">Observaciones: </label>
          <p>{paciente.historial}</p>
        </div>
        <div>
          <label className="font-bold">Agregar observacion: </label>
          <input 
            id="observacion"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-teal-700 focus:ring-2 focus:ring-inset focus:ring-emerald-700 text-center sm:leading-7"
          />
        </div>
        <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Agregar
            </button>
        </div>
      </div>
    </div>
  );
};

export default HistorialMedico;
