import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Identification from './Identification';
import FavoriteFood from './FavoriteFood';
import Counter from './Counter';
import FunctionComponent from './Function';
import Paragraph from './Paragraph';
import MyCart from './MyCart';
import './App.css';

function App() {
    const fruits = [
        { id: 1, name: 'Apple', color: 'Red', rating: 5 },
        { id: 2, name: 'Banana', color: 'Yellow', rating: 4 },
        { id: 3, name: 'Cherry', color: 'Red', rating: 4.5 },
        { id: 4, name: 'Grape', color: 'Purple', rating: 4 },
        { id: 5, name: 'Orange', color: 'Orange', rating: 3.5 },
    ];

    const porkDishes = [];

    return (
        <div className='app-container'>
            <Header />
            <Identification />
            <FavoriteFood items={fruits} emptyMessage="I have no favorite fruits" />
            <FavoriteFood items={porkDishes} emptyMessage="I have no favorite Pork Dishes" />
            <Counter />
            <FunctionComponent />
            <Paragraph />
            <MyCart />
            <Footer />
        </div>
    );
}

export default App;
