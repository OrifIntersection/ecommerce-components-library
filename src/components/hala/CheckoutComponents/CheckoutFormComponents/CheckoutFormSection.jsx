function CheckoutFormSection({ title, children }) {
  return (
    <div className="checkoutFormSection">
      {title}
      {children}
    </div>
  );
}

export function CheckoutContactSection({ children }) {
  return (
    <CheckoutFormSection title="Contact information">
      {children}
    </CheckoutFormSection>
  );
}

export function CheckoutPaymentSection({ children }) {
  return (
    <CheckoutFormSection title="Payment details">
      {children}
    </CheckoutFormSection>
  );
}

export function CheckoutShippingSection({ children }) {
  return (
    <CheckoutFormSection title="Shipping address">
      {children}
    </CheckoutFormSection>
  );
}
