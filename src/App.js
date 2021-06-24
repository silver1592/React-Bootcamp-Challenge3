import React, { useState, useRef } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [visiblePokemons, setVisiblePokemons] = useState(pokemons);
  const inputSearchRef = useRef();
  function OnChangeFilter(event) {
    let searchValue = inputSearchRef.current.value;
    searchValue = searchValue.trim().toLowerCase();

    if (searchValue === "") {
      setVisiblePokemons((prevPoke) => {
        return [...pokemons];
      });
      return;
    }

    setVisiblePokemons((prevPoke) => {
      return [
        ...pokemons.filter((poke) =>
          poke.name.toLowerCase().includes(searchValue)
        )
      ];
    });
  }

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {/**
       Insert here the input tag
      **/}
      <input
        ref={inputSearchRef}
        type="text"
        placeholder=""
        name="input-search"
        onChange={OnChangeFilter}
      />

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
