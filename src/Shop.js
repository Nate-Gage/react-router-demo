import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
        );
        const items = await data.json();
        console.log(items.pokemon);
        setItems(items.pokemon);
    };

    return (
        <div>
            {items.map(item => (
                <h3 key={item.name}>
                    <Link to={`/shop/${item.name}`}>{item.name}</Link>
                </h3>
            ))}
        </div>
    );
}

export default Shop;