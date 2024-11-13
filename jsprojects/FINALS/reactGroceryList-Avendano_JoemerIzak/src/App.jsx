import React, { useState } from 'react';
import './App.css';

const itemPrices = {
  grapes: 2.0,   
  oranges: 1.5,
  kiwis: 3.0,
  bananas: 0.5,
  cucumbers: 1.2,
};

function App() {
  const [cart, setCart] = useState({
    grapes: 0,
    oranges: 0,
    kiwis: 0,
    bananas: 0,
    cucumbers: 0,
  });

  const [paidAmount, setPaidAmount] = useState(0);
  const [showReceipt, setShowReceipt] = useState(false);

  
  const handleQuantityChange = (item, delta) => {
    setCart(prevCart => ({
      ...prevCart,
      [item]: Math.max(0, prevCart[item] + delta),  
    }));
  };

  
  const calculateTotal = () => {
    let total = 0;
    for (const item in cart) {
      total += cart[item] * itemPrices[item];
    }
    return total;
  };

  
  const handleCheckout = () => {
    const total = calculateTotal();
    if (paidAmount >= total) {
      setShowReceipt(true);
    } else {
      alert('Insufficient payment.');
    }
  };

 
  const handleChange = (e) => {
    setPaidAmount(parseFloat(e.target.value) || 0);
  };

  const generateReceipt = () => {
    const total = calculateTotal();
    const change = paidAmount - total;
    return (
      <div className="receipt">
        <h2>Receipt</h2>
        <ul>
          {Object.keys(cart).map(item => cart[item] > 0 && (
            <li key={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}: {cart[item]} x ${itemPrices[item]} = ${cart[item] * itemPrices[item].toFixed(2)}
            </li>
          ))}
        </ul>
        <hr />
        <p>Total Price: ${total.toFixed(2)}</p>
        <p>Paid Amount: ${paidAmount.toFixed(2)}</p>
        <p>Change: ${change.toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Grocery Store</h1>
      {!showReceipt ? (
        <div>
          <h2>Select Your Items</h2>
          <div className="item-list">
            {Object.keys(itemPrices).map(item => (
              <div key={item} className="item">
                <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
                <p>Price: ${itemPrices[item]}</p>
                <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                <span>{cart[item]}</span>
                <button onClick={() => handleQuantityChange(item, -1)}>-</button>
              </div>
            ))}
          </div>

          <div className="checkout">
            <h2>Checkout</h2>
            <p>Total Price: ${calculateTotal().toFixed(2)}</p>
            <input 
              type="number" 
              value={paidAmount} 
              onChange={handleChange} 
              placeholder="Enter paid amount" 
            />
            <button onClick={handleCheckout}>Pay</button>
          </div>
        </div>
      ) : (
        generateReceipt()
      )}
    </div>
  );
}

export default App;
