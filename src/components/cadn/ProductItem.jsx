import React from 'react';

export function ProductItem({ name, price, image, onAddToCart }) {

return (
  <>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{price} CHF</p>
    <button onClick={onAddToCart}>Ajouter au panier</button>
  </>
);
}