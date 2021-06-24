import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [visiblePokemons, setVisiblePokemons] = useState(pokemons);

  function OnChange(event) {}

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {/**
       Insert here the input tag
      **/}
      <input type="text" placeholder="" name="input-search" />

      <div className="cards">
        {/**
        Filter pokemons data and map them to return an array of CardItems.
         */}
        {visiblePokemons.map((poke) => (
          <CardItem name={poke.name} sprite={poke.sprite} />
        ))}
      </div>
    </div>
  );
}
