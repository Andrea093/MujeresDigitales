import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const shippingCost = 10000;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unidades: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <p>Subtotal: ${subtotal}</p>
        <p>Envío: ${shippingCost}</p>
        <p>Total: ${total}</p>
        <button className="checkout-button">Ir a pagar</button>
      </div>
    </div>
  );
};

export default Cart;
