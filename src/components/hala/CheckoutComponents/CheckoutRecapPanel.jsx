import { CheckoutRecapArticles } from "./CheckoutRecapComponents/CheckoutRecapArticles.jsx";

import {
  CheckoutRecapTotals,
  CheckoutRecapSubtotal,
  CheckoutRecapShipping,
  CheckoutRecapTotal,
} from "./CheckoutRecapComponents/CheckoutRecapTotals.jsx";

export default function CheckoutRecapPanel({ articles }) {
  return (
    <div className="checkoutRecapPanel">
      <CheckoutRecapArticles articles={articles} />
      <CheckoutRecapTotals>
        <CheckoutRecapSubtotal />
        <CheckoutRecapShipping />
        <CheckoutRecapTotal />
      </CheckoutRecapTotals>
    </div>
  );
}
