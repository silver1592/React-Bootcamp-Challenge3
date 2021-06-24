import React from "react";

function CardItem({ name, sprite }) {
  return (
    <div className="card-item">
      <h2>{name}</h2>
      <img src={sprite} alt="pokemon" />
    </div>
  );
}

export default CardItem;
