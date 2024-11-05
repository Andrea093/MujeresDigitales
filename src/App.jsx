import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart'; // Asegúrate de que este componente exista
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Usar función de actualización de estado
  };

  return (
    <Router>
      <GlobalStyles />
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/products/details" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
