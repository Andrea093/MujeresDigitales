import { useLocation, Link } from 'react-router-dom';
import './Products.css';

const products = [
  { id: 1, name: 'Earcuff', price: 15000, img: '/assets/img1.jpg', category: 'earcuff' },
  { id: 2, name: 'Aretes Media Luna', price: 18000, img: '/assets/img2.jpg', category: 'aretes' },
  // Añade más productos y sus categorías según sea necesario
];

const Products = ({ addToCart }) => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');

  // Agregar console.log para verificar el valor de category
  console.log('Categoría seleccionada:', category);

  // Filtrar productos por categoría
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="products">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Añadir al carrito</button>
            <Link to={`/products/details?id=${product.id}`}>Ver detalles</Link>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default Products;
