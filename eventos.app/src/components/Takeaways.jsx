import './Takeaways.css';
import WhatsAppButton from './WhatsAppButton';

// Acá tenés tu array de objetos con toda la info
const takeawaysData = [
  {
    title: "Tu relación con vos misma y con los demás",
    text: "Aprenderás a conocerte, fortalecer tu autoestima y construir una identidad más consciente, dejando atrás creencias que ya no te representan."
  },
  {
    title: "Gestión emocional",
    text: "Incorporarás herramientas para comprender, regular y transformar tus emociones, recuperando la calma, la paz y el bienestar interior."
  },
  {
    title: "Reprogramación mental (PNL)",
    text: "Descubrirás cómo funciona tu mente, cómo el lenguaje crea tu realidad y cómo transformar pensamientos y hábitos para generar nuevos resultados."
  },
  {
    title: "Comunicación consciente",
    text: "Mejorarás la relación con vos misma y tus pensamientos."
  },
  {
    title: "Propósito y sentido de vida",
    text: "Reconectarás con tus talentos, valores y dones para vivir con mayor dirección, coherencia y plenitud."
  },
  {
    title: "Relaciones conscientes",
    text: "Aprenderás a crear vínculos desde la mirada del amor y la compasión, a establecer límites saludables y rodearte de personas que vibren en tu misma sintonía."
  },
  {
    title: "Abundancia y merecimiento",
    text: "Transformarás creencias limitantes sobre el merecimiento, el valor personal y la prosperidad para abrir tu canal energético."
  },
  {
    title: "Conexión cuerpo, mente y naturaleza",
    text: "A través de experiencias vivenciales, meditación, respiración consciente, prácticas corporales y visualizaciones, volverás a escuchar la sabiduría de tu cuerpo."
  },
  {
    title: "Espiritualidad práctica",
    text: "Integrarás herramientas que elevan tu nivel de conciencia para vivir con mayor presencia, equilibrio y coherencia entre lo que pensás, sentís y hacés."
  }
];

const Takeaways = () => {
  return (
    <section className="takeaways-container">
      <h2>¿Qué vamos a transformar?</h2>
      
      <div className="takeaways-grid">
        {takeawaysData.map((item, index) => (
          <div className="takeaway-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
        <div className="community-separated-container">
      {/* Bloque de la Imagen Completa */}
      <div className="community-img-banner">
        <img 
          src="/images/5-convertido-de-png.webp" 
          alt="Grupo de mujeres conectando" 
          className="community-full-img" 
        />
      </div>
      
      {/* Bloque del Texto debajo */}
      <div className="community-text-block">
        <p className="community-intro">
          Compartir este camino en comunidad potencia cada proceso, aprendemos del sostén energéticamente.
        </p>
        
        <p className="community-body">
          El grupo contiene, inspira y nos permite descubrir nuevas miradas sobre nosotras mismas, en un espacio de amor, seguridad y confort.
        </p>

        
      </div>
    </div>
      </div>  
      <WhatsAppButton/>
    </section>
  );
};

export default Takeaways;