import './Acompanamiento.css';

const Acompanamiento = () => {
  return (
    <section className="acompanamiento-container">
      <h2>Proceso de Acompañamiento</h2>
      <p className="acompanamiento-subtitle">Un seguimiento personalizado para potenciar tu experiencia</p>

      <div className="acompanamiento-card">
        <div className="acompanamiento-banner">
          <img 
            src="/images/8.webp" 
            alt="Proceso de acompañamiento del retiro" 
            className="acompanamiento-img" 
          />
        </div>
        
        <div className="acompanamiento-text">
          <ul className="acompanamiento-list">
            <li>
              <strong>Antes</strong>
              <p>En el grupo de WhatsApp recibirán <em>técnicas de respiración e información valiosa.</em> </p>
            </li>
            <li>
              <strong>Durante </strong>
              <p>Con el apoyo profesional de excelencia basado en el <em>formulario</em> de tus estresores yendo de lo individual a lo general.</p>
            </li>
            <li>
              <strong>Luego del evento</strong>
              <p>Tenés la oportunidad de elegir aceptar una <em>sesión online e individual</em> de <em>coaching con PNL </em>en forma de obsequio.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Acompanamiento;