import React from 'react';
import "./App.css";
import Card from './cardTamal'

function App() {
  let result = {
    status: 200,
    statusText: "Success",
    data: [
      { details: "dulce", name: "Tamal de dulce", price: "$12.00" },
      { details: "picante", name: "Tamal verde", price: "$10.00" },
      { details: "picante", name: "Tamal rojo", price: "$10.50" },
      { details: "picante", name: "Tamal de rajas", price: "$11.00" }
    ]
  };

  return (
    <div className="container">
        <h1>Tamalitos</h1>
        <div className="cont-cards">
          {result.data.map((tamal) =>
            <Card key={tamal.name} name={tamal.name} details={tamal.details} price={tamal.price} />
          )}
        </div>
    </div>
    
  );
  
}

export default App;
