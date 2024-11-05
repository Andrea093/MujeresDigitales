import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
