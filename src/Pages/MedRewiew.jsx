import React, { useContext, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import obtenerPacientePorEmail from "../Servicio/ServicePacienteData";
import listMed from "../Servicio/ServiceListMed";
import Contexto from "../context/ContextPerson/Contexto";
import {
  comentariosProfesional,
  agregarComentario,
} from "../Servicio/ServiceReviewMed";
import {
  PuntuacionGeneral,
  puntuarProfesional,
} from "../Servicio/ServiceRatingMed";

const MedReview = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0); // Nuevo estado para la calificación
  const [paciente, setPaciente] = useState(null);
  const [medicos, setMedicos] = useState([]);
  const [doctorComments, setDoctorComments] = useState([]);
  const [doctorRating, setDoctorRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listMed();
        setMedicos(data);
        //console.log(data); // Verifica si el estado se actualiza correctamente
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
        console.log("???" + paciente.message);
      }
    };

    obtenerPaciente();
  }, []);

  const handleDoctorSelect = async (doctor) => {
    setSelectedDoctor(doctor);
    if (doctor) {
      try {
        const response = await comentariosProfesional(doctor.id);
        if (response.success) {
          const doctorComments = response.data.comentarios;
          setDoctorComments(doctorComments);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const ratingResponse = await PuntuacionGeneral(doctor.id);
        if (ratingResponse.success) {
          const rating = ratingResponse.data.puntuacion;
          setDoctorRating(rating);
        } else {
          console.log(ratingResponse.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== "" && selectedDoctor && newRating > 0) {
      try {
        const commentData = {
          comentarios: newComment,
          email: selectedDoctor.usuario.email,
        };

        console.log("Puntuación:", newRating); // Imprimir solo la puntuación

        // Enviar la puntuación al servidor
        await puntuarProfesional(selectedDoctor.id, { puntuacion: newRating }); // Pasar la puntuación como un objeto

        // Enviar el comentario al servidor
        await agregarComentario(commentData);

        // Agregar el comentario y la calificación al estado después de recibir la confirmación
        setComments((prevComments) => [
          ...prevComments,
          {
            comentarios: newComment,
          },
        ]);

        // Limpiar los campos de comentario y calificación
        setNewComment("");
        setNewRating(0);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRatingChange = (rating) => {
    setNewRating(rating);
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
        <div
          className="bg-sky-900 bg-opacity-50 rounded-lg shadow p-4 mt-8"
          style={{
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Conoce a nuestros profesionales
          </h2>
          <select
            className="border p-2 mb-4 rounded-lg"
            onChange={(e) => handleDoctorSelect(JSON.parse(e.target.value))}
          >
            <option
              className="bg-gray-300"
              value=""
              disabled={handleDoctorSelect !== ""}
            >
              Seleccione
            </option>
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
              <p className="mb-2 text-center text-semibold">
                {selectedDoctor.especialidad}
              </p>
              <div className="flex">{renderRatingStars(doctorRating)}</div>
            </div>
          )}
        </div>
      </div>

      <div className="w-1/2">
        <div className="bg-gray-200 rounded-lg shadow p-4 ">
          <h2 className="text-lg font-bold mb-4 text-center">
            Comentario de Usuarios
          </h2>
          {doctorComments.map((comment, index) => (
            <div
              key={index}
              className={`flex flex-col items-start mb-6 mt-4 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex items-center rounded-lg p-4 max-w-[80%] ${
                  index % 2 === 0
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-300"
                }`}
              >
                <p className="font-bold line-clamp-3 overflow-hidden">
                  {comment}
                </p>
              </div>
            </div>
          ))}

          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Deja un comentario"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />

            <div className="flex justify-end">
              {[1, 2, 3, 4, 5].map((rating) => (
                <FaStar
                  key={rating}
                  className={`text-2xl cursor-pointer ${
                    rating <= newRating ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => handleRatingChange(rating)}
                />
              ))}
            </div>
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
