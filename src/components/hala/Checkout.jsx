import React from "react";
import "./CheckoutComponents/Checkout.css";
import CheckoutFormPanel from "./CheckoutComponents/CheckoutFormPanel";
import CheckoutRecapPanel from "./CheckoutComponents/CheckoutRecapPanel";
import articles from "./CheckoutComponents/articles.json" with { type: "json" };


export function Checkout({ onSubmit }) {
  return (
    <div className="checkout">
      <CheckoutFormPanel onSubmit={onSubmit} />
      <CheckoutRecapPanel articles={articles} />
    </div>
  );
}
