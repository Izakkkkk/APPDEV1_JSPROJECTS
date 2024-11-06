import React, { useState } from 'react';
import './App.css';
function MyCart() {
    const [cartItems, setCartItems] = useState([]);
    const [item, setItem] = useState('');

    const addItem = () => {
        setCartItems([...cartItems, item]);
        setItem('');
    };

    return (
        <div className='myCart'>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add an item"
            />
            <button onClick={addItem}>Add to Cart</button>
            <ul>
                {cartItems.map((cartItem, index) => (
                    <li key={index}>{cartItem}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyCart;
