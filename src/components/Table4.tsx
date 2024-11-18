'use client'

import React from "react";

type CardProps = {
  name: string;
  price: number;
};

const Card: React.FC<CardProps> = ({ name, price }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default Card;
