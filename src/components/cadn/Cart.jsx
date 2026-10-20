import React from 'react';

export function Cart({ items = [] }) {

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Mon panier</h2>

      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>

              <p>
                {item.price} CHF × {item.quantity}
              </p>

              <p>
                Sous-total : {item.price * item.quantity} CHF
              </p>
            </div>
          ))}

          <hr />

          <h3>Total : {total} CHF</h3>
        </>
      )}
    </div>
  );
}