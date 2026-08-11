import './Includes.css';

const Includes = () => {
  return (
    <section className="includes-container">
      <h2>Servicio de Catering</h2>

      {/* Banner horizontal con la imagen completa */}
      <div className="includes-banner">
        <img 
          src="/images/9-convertido-de-png.webp" 
          alt="Servicio de catering saludable del retiro" 
          className="includes-img" 
        />
      </div>

      {/* Bloque de texto descriptivo y cercano */}
      <div className="includes-text-block">
        <p>
          Durante el evento disfrutaremos propuestas que incluyen: <strong>entrada</strong>, <strong>almuerzo</strong>, <strong>jugos vitamínicos</strong> y <strong>merienda</strong>.
        </p>
        <p className="includes-note">
          Consultá por opciones vegetarianas y restricciones alimentarias.
        </p>
      </div>
      
    </section>
  );
};

export default Includes;