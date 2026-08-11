import { useRef, useEffect } from 'react';
import './Dynamics.css';

const dynamicsData = [
  {
    image: "/images/10-convertido-de-png.webp",
    items: [
      { title: "Piedras y Pisadas", text: "Cada paso sobre la piedra, una decisión que el cuerpo recuerda antes que la mente." },
      { title: "El Laberinto de la Mente", text: "Perderse para encontrarse: cada vuelta del camino es una creencia que se suelta." }
    ]
  },
  {
    image: "/images/4.webp",
    items: [
      { title: "El Círculo de los Ojos", text: "Mirar y ser mirada sin defensa: el encuentro que disuelve la máscara." },
      { title: "Agua de Mar, Agua de Estanque", text: "El oleaje que remueve y la quietud que refleja: dos formas de encontrarte con vos misma." }
    ]
  },
  {
    image: "/images/1.webp",
    items: [
      { title: "La Conexión Espiralada", text: "Como todo en la naturaleza, tu proceso no es lineal: es espiral, y eso también es avanzar." },
      { title: "La Caminata Consciente", text: "Cada pisada es presente puro. El cuerpo en movimiento como puerta a la calma." }
    ]
  },
  {
    image: "/images/7.webp",
    items: [
      { title: "El Poder de tu Ancla", text: "Un recurso interno que llevás siempre con vos, listo para sostenerte cuando lo necesites." },
      { title: "El Grito", text: "Lo que no se dijo, sale. Liberar la voz para soltar lo que el cuerpo guardó en silencio." }
    ]
  },
  {
    image: "/images/8.webp",
    items: [
      { title: "Ondas de Sonido", text: "Vibración que atraviesa el cuerpo y reordena, célula a célula, lo que ya no encaja." },
      { title: "Puertas Abiertas", text: "Cruzar el umbral simbólico hacia la versión de vos que ya está lista para nacer." }
    ]
  },
  {
    image: "/images/2.webp",
    items: [
      { title: "Dulce Despertar", text: "El amanecer interno después del proceso: llegar a una manera más suave de habitarte." },
      { title: "La Intención Fuego", text: "Encender lo que ya decidiste ser. El fuego que transforma la intención en acción." }
    ]
  }
];

const Dynamics = () => {
  const carouselRef = useRef(null);

  // Movimiento sutil inicial a los 2 segundos para dar pista de que se desliza
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
          }
        }, 1000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="dynamics-container">
      <h2>Algunas dinámicas de <em>El Descubrimiento del Ser</em></h2>
      <p className="dynamics-subtitle"> <em>Cada evento es diferente, es diseñado específicamente para cada grupo</em></p>
      
      <div className="dynamics-wrapper">
        <div className="dynamics-carousel" ref={carouselRef}>
          {dynamicsData.map((bloque, index) => (
            <div className="dynamic-card" key={index}>
              <div className="dynamic-img-container">
                <img src={bloque.image} alt={`Dinámica del retiro ${index + 1}`} />
              </div>
              <div className="dynamic-content">
                {bloque.items.map((dinamica, idx) => (
                  <div className="dynamic-item" key={idx}>
                    <h3>{dinamica.title}</h3>
                    <p>{dinamica.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones estilo bloque pegados al centro con flechas izquierda y derecha */}
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={scrollLeft} aria-label="Anterior">
          &#8592;
        </button>
        <button className="carousel-btn" onClick={scrollRight} aria-label="Siguiente">
          &#8594;
        </button>
        
      </div>

     
      
    </section>
  );
};

export default Dynamics;