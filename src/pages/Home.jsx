import { useEffect, useState } from 'react';
import bienvenida from '../assets/bienvenida.jpg';
import bienvenida1 from '../assets/bienvenida1.jpg';
import bienvenida2 from '../assets/bienvenida2.jpg';
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
      {/* Contenedor de imágenes aleatorias */}
      <div className="banner">
        <div className="image-container">
          <img src={images[imageIndex]} alt="Banner de BelahStore" className="banner-logo" />
        </div>
      </div>

      {/* Texto debajo de las imágenes */}
      <h1 className="banner-title">Bienvenidos a BelahStore</h1>
      <p className="welcome-message">Un accesorio puede transformar un look, ¡deja que tu estilo brille!</p>
      <div className="cart-status">Carrito de Compras: {cartItems.length} items</div>
    </div>
  );
};

export default Home;
