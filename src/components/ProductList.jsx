import React from 'react';

const products = [
  { id: 1, name: 'Cigarrillo A', price: 1.50 },
  { id: 2, name: 'Cerveza B', price: 2.00 },
  { id: 3, name: 'Vino C', price: 10.00 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>Productos</h2>
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Precio: ${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;