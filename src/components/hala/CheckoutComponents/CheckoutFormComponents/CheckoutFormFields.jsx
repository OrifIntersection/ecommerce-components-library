function CheckoutFormField({ children }) {
  return <div className="checkoutFormField">{children}</div>;
}

export function CheckoutFormEmail({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="email">Email address</label>
      <input type="email" name="email" id="email" required />
    </CheckoutFormField>
  );
}

export function CheckoutFormCardNum({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="cardNumber">Card number</label>
      <input type="text" name="cardNumber" id="cardNumber" required />
    </CheckoutFormField>
  );
}

export function CheckoutFormCardExp({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="cardDate">Expiration date</label>
      <input
        type="text"
        name="cardDate"
        id="cardDate"
        placeholder="(MM/YY)"
        required
      />
    </CheckoutFormField>
  );
}

export function CheckoutFormCardCVC({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="cardCvc">CVC</label>
      <input type="text" name="cardCvc" id="cardCvc" required />
    </CheckoutFormField>
  );
}

export function CheckoutFormShipAddress({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="shipAddress">Address</label>
      <input type="text" name="shipAddress" id="shipAddress" required />
    </CheckoutFormField>
  );
}

export function CheckoutFormShipCity({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="shipCity">City</label>
      <input type="text" name="shipCity" id="shipCity" required />
    </CheckoutFormField>
  );
}
export function CheckoutFormShipCanton({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="shipCanton">Canton</label>
      <input type="text" name="shipCanton" id="shipCanton" required />
    </CheckoutFormField>
  );
}
export function CheckoutFormShipPost({}) {
  return (
    <CheckoutFormField>
      <label htmlFor="shipPost">Postal code</label>
      <input type="text" name="shipPost" id="shipPost" required />
    </CheckoutFormField>
  );
}
