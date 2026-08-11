import './Footer.css';

const Footer = () => {
  const credentials = [
    <>Master en programación neurolingüística.</>,
    <>Coach especialista en aprendizajes: habilidades blandas.</>,
    <>Terapeuta holística, instructora de mindfulness.</>,
    <>Neurociencia del bienestar.</>,
    <>Docente. Conferencista: neuro oratoria.</>,
    <>Formación en UCDM, espiritualidad y mapa de los niveles de consciencia (Dr. David Hawkins).</>,
    <>Coach ontológico.</>,
    <>Diseñadora de experiencia de bienestar: retiros y jornadas holísticas.</>,
    <>Creadora de la membresía y acompañamiento personalizado <em className="italic-title">Descubrimiento del ser</em>.</>
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Sección de Biografía */}
        <div className="footer-bio-wrapper">
          <div className="bio-image-wrapper">
            <img src="/images/carito.webp" alt="Carito Luna" className="bio-image" />
          </div>
          <div className="bio-text-wrapper">
            <h2 className="bio-name italic-title">Carito Luna</h2>
            <ul className="bio-list">
              {credentials.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Marca y eslogan */}
        <h3 className="footer-brand italic-title">Descubrimiento del Ser</h3>
        <p className="footer-tagline">Espacio de ciencia, consciencia y espiritualidad</p>
        
        {/* Menú del footer */}
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#transformacion">Transformación</a>
          <a href="#dinamicas">Dinámicas</a>
          <a href="#acompanamiento">Acompañamiento</a>
          <a href="#coach">Coach PNL</a>
        </div>

        {/* Botón de Instagram */}
        <div className="footer-social">
          <p className="instagram-cta-text">✨ Mirá momentos de eventos anteriores</p>
          <a 
            href="https://www.instagram.com/carito.descubrimientodelser" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram-btn"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@carito.descubrimientodelser</span>
          </a>
        </div>

        <p className="footer-copy">© 2026 Descubrimiento del Ser. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;