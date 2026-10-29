import "./CheckoutComponents/Checkout.css";
import CheckoutFormPanel from "./CheckoutComponents/CheckoutFormPanel";
import CheckoutRecapPanel from "./CheckoutComponents/CheckoutRecapPanel";


export function Checkout({ handleSubmit, shippingFee, articles }) {
  return (
    <div className="checkout">
      <CheckoutFormPanel handleSubmit={handleSubmit} />
      <CheckoutRecapPanel shippingFee={shippingFee} articles={articles} />
    </div>
  );
}
