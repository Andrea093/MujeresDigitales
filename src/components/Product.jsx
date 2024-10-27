import React from 'react';
import PropTypes from 'prop-types';
import './Product.css'; // Asegúrate de crear este archivo para los estilos

const Product = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

// Definición de tipos de propiedades
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;