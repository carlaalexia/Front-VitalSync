import React, { useContext, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import listMed from "../../Servicio/ServiceListMed";
import {
  comentariosProfesional,
  agregarComentario,
  eliminarComentario,
} from "../../Servicio/ServiceReviewMed";
import {
  PuntuacionGeneral,
  puntuarProfesional,
} from "../../Servicio/ServiceRatingMed";
import { BsFillTrash3Fill } from "react-icons/bs";

const MewReviewAdmin = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0); // Nuevo estado para la calificación
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

  const handleCommentDelete = async (email, comentario) => {
    console.log("Email:", email);
    console.log("Comentario:", comentario);

    try {
      const response = await eliminarComentario(
        selectedDoctor.usuario.email,
        comentario
      );
      if (response.success) {
        // Filtrar los comentarios eliminados del estado
        const updatedComments = doctorComments.filter(
          (comment) => comment.comentarios !== comentario
        );
        setDoctorComments(updatedComments);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
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
            <div key={index} className={`flex flex-row items-start mb-6 mt-4`}>
              <div
                className={`flex items-center rounded-lg p-4 max-w-[80%] ${
                  index % 2 === 0 ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                <p className="font-bold line-clamp-3 overflow-hidden">
                  {comment}
                </p>
              </div>
              <button
                className={`ml-2 mt-3 bg-red-500 hover:bg-red-300 text-white rounded-md p-2 ${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
                onClick={() =>
                  handleCommentDelete(selectedDoctor.email, comment)
                }
              >
                <BsFillTrash3Fill />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MewReviewAdmin;
