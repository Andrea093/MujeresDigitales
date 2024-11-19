import { useEffect, useState } from 'react';
import bienvenida from '/assets/bienvenida.jpg';
import bienvenida1 from '/assets/bienvenida1.jpg';
import bienvenida2 from '/assets/bienvenida2.jpg';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import './Home.css';

const images = [bienvenida, bienvenida1, bienvenida2];

const Home = ({ cartItems }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Textos de bienvenida */}
      <h1 className="banner-title">Bienvenidos a BelahStore</h1>
      <p className="welcome-message">Refleja tu Esencia, Brilla en Morado</p>

      {/* Contenedor de imágenes aleatorias */}
      <div className="banner">
        <div className="image-container">
          <img src={images[imageIndex]} alt="Banner de BelahStore" className="banner-logo" />
        </div>
      </div>

      {/* Iconos de redes sociales */}
      <div className="social-icons">
        <a href="https://www.instagram.com/belahstore9/profilecard/?igsh=bzY4Y2gwbjc1Nzh5" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@belahstore9?_t=8rBLWTUSnpv&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" />
        </a>
      </div>

      {/* Texto descriptivo debajo de los iconos */}
      <p className="description-text">
        Explora BelahStore, el lugar donde cada accesorio resalta tu personalidad y estilo único. Sumérgete en una colección inspirada en tonos morados, perfecta para quienes buscan elegancia y un toque de misticismo. Aquí encontrarás piezas únicas que realzan tu belleza y completan tu look con el equilibrio ideal entre lo sofisticado y lo moderno. ¡Descubre la magia de BelahStore y deja que cada accesorio hable por ti!
      </p>

      {/* Estado del carrito de compras */}
      <div className="cart-status">Carrito de Compras: {cartItems.length} items</div>
    </div>
  );
};

export default Home;
