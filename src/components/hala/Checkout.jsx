import React from "react";
import "./CheckoutComponents/Checkout.css";
import CheckoutFormPanel from "./CheckoutComponents/CheckoutFormPanel";
import CheckoutRecapPanel from "./CheckoutComponents/CheckoutRecapPanel";
export function Checkout({ onSubmit }) {
  return (
    <div className="checkout">
      <CheckoutFormPanel onSubmit={onSubmit} />
      <CheckoutRecapPanel />
    </div>
  );
}
