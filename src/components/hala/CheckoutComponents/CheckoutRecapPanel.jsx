import { CheckoutRecapArticles } from "./CheckoutRecapComponents/CheckoutRecapArticles.jsx";
import { CheckoutRecapTotals } from "./CheckoutRecapComponents/CheckoutRecapTotals.jsx";

export default function CheckoutRecapPanel({ articles, shippingFee }) {
  return (
    <div className="checkoutRecapPanel">
      <CheckoutRecapArticles articles={articles} />
      <CheckoutRecapTotals articles={articles} shippingFee={shippingFee} />
    </div>
  );
}
