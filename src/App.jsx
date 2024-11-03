import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import './styles/reset.css';
import './styles/main.scss';
import Header from './components/Header';
import OrderSummary from './components/OrderSummary';
import PlanDetails from './components/PlanDetails';
import Button from './components/Button';

const App = () => {
  return (
    <div className="order-summary">
      <GlobalStyle />
      <Header />
      <OrderSummary />
      <PlanDetails />
      <Button primary>Proceed to Payment</Button>
      <Button>Cancel Order</Button>
    </div>
  );
};

export default App;
