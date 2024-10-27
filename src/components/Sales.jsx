import React, { useState } from 'react';

const Sales = ({ sales }) => {
  const [showSales, setShowSales] = useState(false);

  const toggleSales = () => {
    setShowSales(!showSales);
  };

  return (
    <div className="sales">
      <h2>Historial de Ventas</h2>
      <button onClick={toggleSales}>
        {showSales ? 'Ocultar Ventas' : 'Mostrar Ventas'}
      </button>
      {showSales && (
        <ul>
          {sales.length === 0 ? (
            <li>No hay ventas registradas.</li>
          ) : (
            sales.map((sale, index) => (
              <li key={index}>
                Venta #{index + 1}: Total - ${sale.total.toFixed(2)}
                <ul>
                  {sale.items.map(item => (
                    <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
                  ))}
                </ul>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Sales;