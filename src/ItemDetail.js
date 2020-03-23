import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match.params.name);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
        );
        const response = await fetchItem.json();
        var thePokemon = response.pokemon.filter((item) => {
            return item.name === match.params.name;
        });
        setItem(thePokemon[0]);
        console.log(thePokemon[0]);
    };

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.img} />
        </div>
    );
}

export default Item;