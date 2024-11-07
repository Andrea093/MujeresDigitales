import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Products.css';

const products = [
  //Earcuff

  { id: 1, name: 'Earcuff Mostacilla', price: 16000, img: '/assets/img1.jpg', category: 'earcuff' },
  { id: 2, name: 'Earcuff Colores Lis', price: 15000, img: '/assets/img3.jpg', category: 'earcuff' },
  { id: 3, name: 'Earcuff Colores Tex', price: 8000, img: '/assets/img4.jpg', category: 'earcuff' },
  { id: 4, name: 'Earcuff Seed', price: 16000, img: '/assets/img5.jpg', category: 'earcuff' },
  { id: 5, name: 'Earcuff Chunky', price: 15000, img: '/assets/img6.jpg', category: 'earcuff' },
  //Aretes

  { id: 6, name: 'Aretes Media Luna', price: 18000, img: '/assets/img2.jpg', category: 'aretes' },
  { id: 7, name: 'Arete Tex', price: 16000, img: '/assets/img7.jpg', category: 'aretes' },
  { id: 8, name: 'Gota Color', price: 15000, img: '/assets/img8.jpg', category: 'aretes' },
  { id: 9, name: 'Chunky', price: 18000, img: '/assets/img9.jpg', category: 'aretes' },
  { id: 10, name: 'Candonga Diseño', price: 16000, img: '/assets/img11.jpg', category: 'aretes' },
  { id: 11, name: 'Candonga Silver', price: 16000, img: '/assets/img12.jpg', category: 'aretes' },
  { id: 12, name: 'Square', price: 16000, img: '/assets/img13.jpg', category: 'aretes' },
  { id: 13, name: 'Rhombus', price: 16000, img: '/assets/img14.jpg', category: 'aretes' },
  { id: 14, name: 'CandoTex', price: 17000, img: '/assets/img15.jpg', category: 'aretes' },
  { id: 15, name: 'ColorsHoop', price: 15000, img: '/assets/img16.jpg', category: 'aretes' },
  { id: 16, name: 'AreGold', price: 16000, img: '/assets/img17.jpg', category: 'aretes' },
  { id: 17, name: 'MultGold', price: 15000, img: '/assets/img18.jpg', category: 'aretes' },
  { id: 18, name: 'ByHeart', price: 15000, img: '/assets/img19.jpg', category: 'aretes' },
  { id: 19, name: 'Butterfly', price: 18000, img: '/assets/img20.jpg', category: 'aretes' },
  { id: 20, name: 'Blackhoop', price: 15000, img: '/assets/img21.jpg', category: 'aretes' },
  { id: 21, name: 'SilverArt', price: 16000, img: '/assets/img22.jpg', category: 'aretes' },
  { id: 22, name: 'FlowerLength', price: 18000, img: '/assets/img23.jpg', category: 'aretes' },

  //Cadenas
  { id: 23, name: 'Perlas', price: 10000, img: '/assets/img24.jpg', category: 'cadenas' },
  { id: 24, name: 'ByHeart', price: 15000, img: '/assets/img25.jpg', category: 'cadenas' },
  { id: 25, name: 'Choker', price: 17000, img: '/assets/img26.jpg', category: 'cadenas' },
  { id: 26, name: 'Snake', price: 18000, img: '/assets/img27.jpg', category: 'cadenas' },
  { id: 6, name: 'Colors', price: 15000, img: '/assets/img28.jpg', category: 'cadenas' },
  { id: 6, name: 'Chain', price: 22000, img: '/assets/img29.jpg', category: 'cadenas' },
  // Añade más productos y sus categorías según sea necesario
];

const Products = ({ addToCart }) => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    setQuantities({
      ...quantities,
      [productId]: quantity,
    });
  };

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="products">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div className="quantity-input">
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) - 1)}
              >-</button>
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
              />
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 1) + 1)}
              >+</button>
            </div>
            <button onClick={() => addToCart({ ...product, quantity: quantities[product.id] || 1 })}>
              Añadir al carrito
            </button>
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
