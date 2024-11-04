import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  { id: 1, name: 'Earcuff', price: 15000, img: '/src/assets/img1.jpg' },
  { id: 2, name: 'Aretes Media Luna', price: 18000, img: '/src/assets/img2.jpg' },
];

const Products = ({ addToCart }) => {
  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Añadir al carrito</button>
          {/* Enlace para ver detalles, ahora enlazando a /products/details con el ID como query parameter */}
          <Link to={`/products/details?id=${product.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
