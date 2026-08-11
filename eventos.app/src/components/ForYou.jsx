import './ForYou.css'
import './WhatsAppButton'; 
import WhatsAppButton from './WhatsAppButton';

const forYouData = [
  {
    text: "Sabés dar todo por amor, pero no sabés cuándo ese amor te está costando demasiado.",
    category: "Vínculos"
  },
  {
    text: "Sabés que la historia se repite, cambiaste de escenario, pero a veces sentís que repetís el mismo guion.",
    category: "Patrones"
  },
  {
    text: "Sabés hacia dónde querés ir, pero el miedo o la duda te frenan en la puerta.",
    category: "Miedo y Control"
  },
  {
    text: "Sabés que merecés descansar y frenar, pero la culpa no te deja hacerlo en paz.",
    category: "Culpa"
  }
];

const ForYou = () => {
  return (
    <section className="foryou-container">
      <div className="foryou-content">
        <h2>Tal vez te reconozcas en...</h2>
        
        <div className="foryou-list">
          {forYouData.map((item, index) => (
            <div className="foryou-item" key={index}>
              <p>{item.text}</p>
              <span className="foryou-category">{item.category}</span>
            </div>
          ))}
        </div>
        <div className="foryou-cta">
          <p className="cta-question"> <em>¿Qué otras situaciones sentís que merecen un cambio?</em></p>
          <WhatsAppButton/>
        </div>
      </div>
    </section>
  );
};

export default ForYou;