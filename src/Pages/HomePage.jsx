import React, { useRef, useState, useEffect } from "react";
import "../CSS/homefile.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPhoneFill,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";

const HomePage = () => {
  const [animationOneComplete, setAnimationOneComplete] = useState(false);
  const [animationTwoComplete, setAnimationTwoComplete] = useState(false);
  const sectionRef = useRef(null);
  const socialMediaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionPosition = sectionRef.current.getBoundingClientRect().top;
      const socialMediaPosition = socialMediaRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (!animationOneComplete && sectionPosition < windowHeight) {
        setAnimationOneComplete(true);
      }

      if (!animationTwoComplete && socialMediaPosition < windowHeight) {
        setAnimationTwoComplete(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationOneComplete, animationTwoComplete]);

  const sectionClasses = `services-section ${animationOneComplete ? "slide-in" : ""}`;
  const socialMediaClasses = `carousel-container ${animationTwoComplete ? "slide-in-right" : ""}`;

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (index) => {
    setHoveredIcon(index);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div>
      <div className="relative">
        <img
          className="mx-auto h-auto w-full"
          src="../assets/manos3.jpeg"
          alt="VitalS"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center rounded-lg bg-gray-200 bg-opacity-25 p-4">
            <h1
              className="text-4xl text-bold text-blue-800 font-semibold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Bienvenido a nuestra página de turnos médicos en línea
            </h1>
            <h2 className="text-lg my-4 mx-4 leading-tight max-w-lg ml-48">
              Aquí podrás gestionar tus citas médicas de forma cómoda y
              eficiente. Olvídate de largas esperas en la sala de espera y
              reserva tus consultas con solo unos clics.
            </h2>
          </div>
        </div>
      </div>
      <main>
        <div ref={sectionRef} className={sectionClasses}>
          <div className="text-center">
            <p className="text-4xl text-black mt-16 mb-8">
              ¿Por qué elegirnos?
            </p>
          </div>
          <section>
            <div className="bg-gray-200 bg-opacity-65 p-8 shadow-lg rounded-lg max-w-lg mx-auto">
              <ul className="list-disc list-inside mt-4">
                <li className="mb-4">
                  Nuestro sistema te permite buscar y seleccionar a los
                  profesionales de la salud que necesitas. Podrás ver la
                  información detallada de cada médico, incluyendo sus
                  calificaciones y comentarios de otros pacientes, para tomar la
                  mejor decisión.
                </li>
                <li className="mb-4">
                  Una vez que hayas seleccionado al médico de tu preferencia,
                  podrás elegir la fecha y hora más conveniente para tu
                  consulta.
                </li>
                <li className="mb-4">
                  Todo esto desde la comodidad de tu hogar o cualquier lugar
                  donde te encuentres, las 24 horas del día, los 7 días de la
                  semana.
                </li>
                <li>
                  ¡Explora nuestra página y comienza a disfrutar de la comodidad
                  de gestionar tus turnos médicos en línea!
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section ref={socialMediaRef} className={socialMediaClasses}>
          <div className="text-center">
            <p className="text-4xl text-black mt-16 mb-8">
              Obras sociales asociadas
            </p>
          </div>
          <div className="carousel-container">
            <div ref={carouselRef} className="carousel">
              <img src="../assets/GALENO.jpg" alt="Galeno" />
              <img src="../assets/IOMA.png" alt="IOMA" />
              <img src="../assets/MEDIFE.png" alt="MEDIFE" />
              <img src="../assets/OSDE.png" alt="OSDE" />
              <img src="../assets/swis.jpg" alt="Swiss Medical" />
            </div>
            <div
              className="carousel-arrow carousel-arrow-left"
              onClick={scrollLeft}
            >
              &lt;
            </div>
            <div
              className="carousel-arrow carousel-arrow-right"
              onClick={scrollRight}
            >
              &gt;
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 py-6 mt-10">
          <div className="flex justify-between max-w-3xl mx-auto px-4">
            <div>
              <h1 className="text-white mb-2">
                Seguinos en nuestras redes sociales
              </h1>
              <div className="icons-container ml-4">
                <div
                  className="icon-wrapper"
                  onMouseEnter={() => handleIconHover(0)}
                  onMouseLeave={handleIconLeave}
                >
                  <a href="#">
                    <BsFacebook
                      className={`icon ${hoveredIcon === 0 ? "hovered" : ""}`}
                    />
                  </a>
                </div>
                <div
                  className="icon-wrapper"
                  onMouseEnter={() => handleIconHover(1)}
                  onMouseLeave={handleIconLeave}
                >
                  <a href="#">
                    <BsInstagram
                      className={`icon ${hoveredIcon === 1 ? "hovered" : ""}`}
                    />
                  </a>
                </div>
                <div
                  className="icon-wrapper"
                  onMouseEnter={() => handleIconHover(2)}
                  onMouseLeave={handleIconLeave}
                >
                  <a href="#">
                    <BsTwitter
                      className={`icon ${hoveredIcon === 2 ? "hovered" : ""}`}
                    />
                  </a>
                </div>
                <div
                  className="icon-wrapper"
                  onMouseEnter={() => handleIconHover(3)}
                  onMouseLeave={handleIconLeave}
                >
                  <a href="#">
                    <BsTiktok
                      className={`icon ${hoveredIcon === 3 ? "hovered" : ""}`}
                    />
                  </a>
                </div>
                <div
                  className="icon-wrapper"
                  onMouseEnter={() => handleIconHover(4)}
                  onMouseLeave={handleIconLeave}
                >
                  <a href="#">
                    <BsYoutube
                      className={`icon ${hoveredIcon === 4 ? "hovered" : ""}`}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-white">Baja la aplicación móvil</h1>
              <a href="https://vital-movil.vercel.app/login">
                <img
                  src="../assets/google.svg"
                  alt="Google Play"
                  className="mt-2 mr-7"
                />
              </a>
            </div>
          </div>

          <h6 className="text-gray-500 text-center mt-10">
            © 2020-2023 Vital Sync. Todos los derechos reservados.
          </h6>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
