import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const products = [
  { id: 1, name: 'Earcuff', price: 15000, img: '/src/assets/img1.jpg', description: 'Un hermoso Earcuff en tono liDescubre el encanto único de nuestro Earcuff en Mostacilla, una joya que transforma cualquier look con su elegancia y sofisticación. Este hermoso accesorio está meticulosamente elaborado a mano con coloridas mostacillas que brillan y reflejan la luz, creando un efecto cautivador en tus orejas. Su diseño ligero y ajustable se adapta perfectamente a cualquier forma de lóbulo, garantizando comodidad durante todo el día..' },
  { id: 2, name: 'Aretes Media Luna', price: 18000, img: '/src/assets/img2.jpg', description: 'Añade un toque de elegancia a tu colección de joyas con nuestros Aretes Media Luna en Rodio Dorados. Con un acabado brillante y sofisticado, estos aretes son el accesorio perfecto para realzar cualquier look, ya sea casual o formal. Su diseño en forma de media luna simboliza la belleza y la transformación, convirtiéndolos en una pieza significativa para cualquier ocasión. Fabricados con rodio dorado de alta calidad, también están disponibles en un hermoso acabado plateado, brindando versatilidad para que elijas el estilo que mejor se adapte a ti. Ligeros y cómodos, son ideales para usarlos todo el día sin sacrificar tu comodidad.' },
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
