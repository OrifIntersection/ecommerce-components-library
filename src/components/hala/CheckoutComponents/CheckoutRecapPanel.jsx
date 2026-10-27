export default function CheckoutRecapPanel({}) {
  return (
    <div className="checkoutRecapPanel">
      <div className="checkoutRecapArticles">
        Your order
        <div className="checkoutRecapArticle"></div>
        <div className="checkoutRecapArticle"></div>
        <div className="checkoutRecapArticle"></div>
      </div>
      <div className="checkoutRecapTotals">
        <div className="checkoutSubtotal">Subtotal</div>
        <div className="checkoutShipping">Shipping</div>
        <div className="checkoutTotal">Total</div>
      </div>
    </div>
  );
}
