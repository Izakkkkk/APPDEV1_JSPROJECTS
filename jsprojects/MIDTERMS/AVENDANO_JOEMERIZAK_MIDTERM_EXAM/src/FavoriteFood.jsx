import React from 'react';
import './App.css';

function FavoriteFood({ items, emptyMessage }) {
    return (
        <div>
            {items.length > 0 ? (
                items.map((fruit) => (
                    <div key={fruit.id}>
                        <p>Name: {fruit.name}</p>
                        <p>Color: {fruit.color}</p>
                        <p>Rating: {fruit.rating}</p>
                    </div>
                ))
            ) : (
                <p>{emptyMessage}</p>
            )}
        </div>
    );
}

export default FavoriteFood;