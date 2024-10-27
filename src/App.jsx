import React, { useState } from 'react';
import './styles.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Sales from './components/Sales';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sales, setSales] = useState([]);

  // Agrega un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Elimina un producto del carrito
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Completa la venta y resetea el carrito
  const completeSale = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setSales([...sales, { items: cartItems, total }]);
    setCartItems([]);
  };

  return (
    <div className="app">
      {/* Agregar el logo aquí */}
      <img src="/Logo.jpg" alt="Logo de la Tienda" className="logo" />
      <h1>Cigarrería y Licorera La Subterránea</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} completeSale={completeSale} />
      <Sales sales={sales} />
    </div>
  );
};

export default App;