import './About.css';

const aboutData = {
  title: "El Descubrimiento del Ser",
  paragraphs: [
    `El <strong>Descubrimiento del Ser</strong> es una experiencia de transformación en la naturaleza que invita a detener el ruido, soltar aquello que ya no sostiene tu vida y reconectar con tu esencia. En contacto con la tierra, el agua, el aire y el fuego, recordás que vos también sos naturaleza y que dentro tuyo existe una sabiduría capaz de guiarte hacia una vida más plena.`,
    `Antes de crear una nueva <em>realidad</em>, es necesario vaciar, aceptar, atravesar y liberar. Como una <em>semilla que primero rompe su cáscara para poder brotar</em>, cada proceso de transformación comienza dejando atrás lo que limita nuestro crecimiento.`,
    `Desde ese espacio nace una <em>nueva forma de ser</em>: más consciente, más amorosa, más libre y profundamente conectada con el universo, con la vida y con la confianza en una misma en <em>receptibilidad</em>.`
  ]
};

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>{aboutData.title}</h2>
        
        <div className="about-text">
          {aboutData.paragraphs.map((parrafo, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: parrafo }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;