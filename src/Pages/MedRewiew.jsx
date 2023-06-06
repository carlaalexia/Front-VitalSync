import React, { useContext, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import obtenerPacientePorEmail from "../Servicio/ServicePacienteData";
import listMed from "../Servicio/ServiceListMed";
import Contexto from "../context/ContextPerson/Contexto";

const MedReview = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [medicos, setMedicos] = useState([]);
  const {profesional, setProfesional} = useContext(Contexto);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listMed();
        setMedicos(data);
        console.log(data); // Verifica si el estado se actualiza correctamente
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const obtenerPaciente = async () => {
      const paciente = await obtenerPacientePorEmail();
  
      if (paciente.success) {
        setPaciente(paciente.data);
      } else {
        console.log("????" + paciente.message);
      }
    };
  
    obtenerPaciente();
  }, []);

  const doctors = [
    { id: 1, name: "Juan Perez", image: "../assets/doctor1.webp", especialidad: "Cardiologo", rating: 1 },
    { id: 2, name: "Carlos Lopez", image: "../assets/doctor2.jpg", especialidad: "Dermatologo", rating: 3.8 },
    { id: 3, name: "Maria Gomez", image: "../assets/doctora1.jpg", especialidad: "Pediatra", rating: 4.2 },
  ];

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        { comment: newComment, user: paciente.nombre + ' ' + paciente.apellido, image: "../assets/gatos.jpg" },
      ]);
      setNewComment("");
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 mb-4">
        <div className="bg-sky-900 bg-opacity-50 rounded-lg shadow p-4 mt-8"
        style={{
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}>
          <h2 className="text-2xl font-bold mb-4">Conoce a nuestros profesionales</h2>
          <select
            className="border p-2 mb-4 rounded-lg"
            onChange={(e) => handleDoctorSelect(JSON.parse(e.target.value))}
          >
            <option value="">Seleccione</option>
            {medicos.map((doctor) => (
              <option key={doctor.id} value={JSON.stringify(doctor)}>
                {doctor.nombre} {doctor.apellido}
              </option>
            ))}
          </select>
          {selectedDoctor && (
            <div className="flex flex-col items-center">
              <img
                src={selectedDoctor.foto}
                alt={selectedDoctor.name}
                className="w-40 h-40 object-cover rounded-full mb-2"
              />
              <p className="mb-2 text-center">{selectedDoctor.especialidad}</p>
              <div className="flex">
                {renderRatingStars(selectedDoctor.rating)}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-3/4">
        <div className="bg-gray-200 rounded-lg shadow p-4">
          <h2 className="text-2xl font-bold mb-4">Comentarios de Usuarios</h2>
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center mb-4">
              <img
                src={comment.image}
                alt="Usuario"
                className="w-10 h-10 object-cover rounded-full mr-2"
              />
               <div>
                <p className="font-bold">{comment.user}</p>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
          <hr className="my-4 border-gray-400" />
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Deja un comentario"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Enviar comentario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedReview;
