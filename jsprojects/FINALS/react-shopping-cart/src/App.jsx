import { useState } from 'react';
import Shop from './shop';
import Login from './Login'

function App() {
  let items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    { id: 3, name: "Item 3", price: 20 },
    { id: 4, name: "Item 4", price: 25 },
    { id: 5, name: "Item 5", price: 30 },
  ];

  return (
    <>
      <Login />
    </>
  );
}

export default App;
