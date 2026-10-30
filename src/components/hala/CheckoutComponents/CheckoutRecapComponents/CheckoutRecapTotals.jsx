export function CheckoutRecapTotals({ articles, shippingFee }) {
  const subtotal = articles.reduce(
    (sum, article) => sum + article.totalPrice,
    0,
  );
  const total = subtotal + shippingFee;

  return (
    <div className="checkoutRecapTotals">
      <CheckoutRecapSubtotal subtotal={subtotal.toFixed(2)} />
      <CheckoutRecapShipping shippingFee={shippingFee.toFixed(2)} />
      <CheckoutRecapTotal total={total.toFixed(2)} />
    </div>
  );
}

function CheckoutRecapSubtotal({ subtotal }) {
  return (
    <div className="checkoutSubtotal">
      <span>Subtotal</span>
      <span>{subtotal}</span>
    </div>
  );
}

function CheckoutRecapShipping({ shippingFee }) {
  return (
    <div className="checkoutShipping">
      <span>Shipping</span>
      <span>{shippingFee}</span>
    </div>
  );
}

function CheckoutRecapTotal({ total }) {
  return (
    <div className="checkoutTotal">
      <span>Total</span>
      <span>{total}</span>
    </div>
  );
}
