import React, { useState } from 'react';
import './App.css';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 2)}>Increment by 2</button>
            <button onClick={() => setCount(count - 2)}>Decrement by 2</button>
        </div>
    )
}

export default Counter;