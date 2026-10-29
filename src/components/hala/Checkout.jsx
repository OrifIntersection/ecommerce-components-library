import React from "react";
import "./CheckoutComponents/Checkout.css";
import CheckoutFormPanel from "./CheckoutComponents/CheckoutFormPanel";
import CheckoutRecapPanel from "./CheckoutComponents/CheckoutRecapPanel";
import articles from "./CheckoutComponents/articles.json" with { type: "json" };


export function Checkout({ handleSubmit }) {
  return (
    <div className="checkout">
      <CheckoutFormPanel handleSubmit={handleSubmit} />
      <CheckoutRecapPanel articles={articles} />
    </div>
  );
}
