import { CheckoutRecapArticles } from "./CheckoutRecapComponents/CheckoutRecapArticles.jsx";
import { CheckoutRecapArticle } from "./CheckoutRecapComponents/CheckoutRecapArticle.jsx";

import {
  CheckoutRecapTotals,
  CheckoutRecapSubtotal,
  CheckoutRecapShipping,
  CheckoutRecapTotal,
} from "./CheckoutRecapComponents/CheckoutRecapTotals.jsx";

export default function CheckoutRecapPanel({}) {
  return (
    <div className="checkoutRecapPanel">
      <CheckoutRecapArticles>
        <CheckoutRecapArticle />
        <CheckoutRecapArticle />
        <CheckoutRecapArticle />
      </CheckoutRecapArticles>
      <CheckoutRecapTotals>
        <CheckoutRecapSubtotal />
        <CheckoutRecapShipping />
        <CheckoutRecapTotal />
      </CheckoutRecapTotals>
    </div>
  );
}
