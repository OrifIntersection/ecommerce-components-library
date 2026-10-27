export function CheckoutFormSubmit({ isSubmitting, submitError }) {
  return (
    <>
      <button type="submit" className="checkoutFormSubmit" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Pay"}
      </button>
      {submitError && <p className="checkoutFormError">{submitError}</p>}
    </>
  );
}
