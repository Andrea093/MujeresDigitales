import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // Importar los iconos necesarios
import logo from '/assets/logo.jpg';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProductsMenu = (e) => {
    e.stopPropagation(); // Evitar que el click cierre el menú
    setIsProductsOpen(!isProductsOpen);
  };

  const closeProductsMenu = () => {
    setIsProductsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-title">
        <img src={logo} alt="Logo de BelahStore" className="navbar-logo" />
        <h1 className="navbar-title">BelahStore</h1>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-home" onClick={closeProductsMenu}>
            <FaHome className="navbar-home-icon" />
          </Link>
        </li>
        <li className="navbar-dropdown">
          <div onClick={toggleProductsMenu} className="dropdown-title">
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
          </div>
          <ul className={`navbar-dropdown-menu ${isProductsOpen ? 'open' : ''}`}>
            <li><Link to="/products?category=earcuff" onClick={closeProductsMenu}>Earcuff</Link></li>
            <li><Link to="/products?category=aretes" onClick={closeProductsMenu}>Aretes</Link></li>
            <li><Link to="/products?category=cadenas" onClick={closeProductsMenu}>Cadenas</Link></li>
            <li><Link to="/cart" onClick={closeProductsMenu}>Carrito</Link></li>
          </ul>
        </li>
        <li className="cart">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" /> {/* Icono del carrito */}
            <span className="cart-count">{cartItems.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
