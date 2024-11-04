import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-title">
        <img src={logo} alt="Logo de BelahStore" className="navbar-logo" />
        <h1 className="navbar-title">BelahStore</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li className="cart">🛒 {cartItems.length}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
