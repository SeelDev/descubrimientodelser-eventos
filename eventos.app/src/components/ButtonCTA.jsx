import './ButtonCTA.css';

const ButtonCTA = () => {
  return (
    <a 
      href="https://wa.me/5491168030906?text=Hola%20Carito,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20evento%20de%20este%20mes.%20Gracias" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="button"
    >
      <div className="dots_border"></div>
      
      {/* Las tres estrellitas originales */}
      <svg className="sparkle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="path" d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" fill="currentColor"></path>
        <path className="path" d="M5 2L5.85 4.85L8.7 5.7L5.85 6.55L5 9.42L4.15 6.55L1.3 5.7L4.15 4.85L5 2Z" fill="currentColor"></path>
        <path className="path" d="M19 14L19.57 15.86L21.43 16.43L19.57 17L19 18.86L18.43 17L16.57 16.43L18.43 15.86L19 14Z" fill="currentColor"></path>
      </svg>

      <span className="text_button">Quiero mi transformación</span>
    </a>
  );
};

export default ButtonCTA;