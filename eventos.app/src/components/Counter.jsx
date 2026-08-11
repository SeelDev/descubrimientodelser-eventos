import { useState, useEffect, useRef } from 'react';
import './Counter.css';
import ButtonCTA from './ButtonCTA';
const Counter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 400;
      const duration = 2000; 
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className="counter-container" ref={counterRef}>
      <div className="counter-content">
        <h2 className="counter-number">+{count}</h2>
        <p className="counter-text">mujeres se han transformado con esta experiencia</p>
        
        {/* Renderizamos el botón como componente independiente */}
       <ButtonCTA />
      </div>
    </section>
  );
};

export default Counter;