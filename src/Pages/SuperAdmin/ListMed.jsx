import '../../index.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import listMed from '../../Servicio/ServiceListMed';
import { deleteMedico } from '../../Servicio/ServiceDeleteMed';
import { toggleMedicoEstado } from '../../Servicio/ServiceChangeStateMed';

const ListMed = () =>{

    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await listMed();
            setMedicos(data); 
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    }, []);

    const handleToggleEstado = async (medicoId) => {
      try {
        await toggleMedicoEstado(medicoId, setMedicos);
      } catch (error) {
        console.log(error);
      }
    };

 const handleDeleteMedico = async (medicoId) => {
      try {
        await deleteMedico(medicoId, setMedicos);
        
      } catch (error) {
        console.log(error);
      }
    };
    
  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-1 py-12 lg:px-8 -mt-20">

        <div className="p-5 border bg-teal-50 mx-auto h-full rounded-xl drop-shadow-md">
          <h3 className="text-lg font-bold mb-4 text-center">Lista de Profesionales</h3>
          <table className="w-[630px] bg-gray-50 border border-gray-300 drop-shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Apellido</th>
              <th className="py-2 px-4 border-b">Especialidad</th>
              <th className="py-2 px-4 border-b">Estado</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="py-2 px-4 border-b text-center">{medico.nombre}</td>
                <td className="py-2 px-4 border-b text-center">{medico.apellido}</td>
                <td className="py-2 px-4 border-b text-center">{medico.especialidad}</td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={medico.estado}
                    onChange={() => handleToggleEstado(medico.id)}
                    className="ml-8"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => handleDeleteMedico(medico.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

    </div>
  );
}

export default ListMed;