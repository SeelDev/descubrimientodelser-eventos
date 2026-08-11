import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        Descubrimiento del Ser
      </div>

      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#transformacion" onClick={closeMenu}>Transformación</a>
        <a href="#dinamicas" onClick={closeMenu}>Dinámicas</a>
        <a href="#acompanamiento" onClick={closeMenu}>Acompañamiento</a>
        <a href="#coach" onClick={closeMenu}>Coach PNL</a>
      </nav>

      {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;