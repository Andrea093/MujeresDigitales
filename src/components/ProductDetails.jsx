import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const products = [
  { id: 1, name: 'Earcuff', price: 15000, img: '/assets/img1.jpg', description: 'Un hermoso Earcuff en tono lila con mostacillas.' },
  { id: 2, name: 'Aretes Media Luna', price: 18000, img: '/assets/img2.jpg', description: 'Añade un toque de elegancia a tu colección de joyas con nuestros Aretes Media Luna en Rodio Dorados.' },
  // Añade más productos y sus descripciones según sea necesario
];

const ProductDetails = ({ addToCart }) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const productId = query.get('id');
  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetails;
