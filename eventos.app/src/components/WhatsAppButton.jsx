import './WhatsAppButton.css';

const WhatsAppButton = ({ text = "Quiero ser parte ahora", phoneNumber = "5491168030906" }) => {
const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola%20Carito,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20evento%20de%20este%20mes.%20Gracias`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-dynamic-btn"
    >
      <span className="btn-glow"></span>
      <span className="btn-text">{text}</span>
    </a>
  );
};

export default WhatsAppButton;