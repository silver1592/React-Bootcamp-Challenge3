import React from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  /**
   * Input state management logic here
   */

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {/**
       Insert here the input tag
       **/}
      <div className="cards">
        {/**
        Filter pokemons data and map them to return an array of CardItems.
         */}
      </div>
    </div>
  );
}
