import { useState } from "react";

import {
  CheckoutFormEmail,
  CheckoutFormCardNum,
  CheckoutFormCardExp,
  CheckoutFormCardCVC,
  CheckoutFormShipAddress,
  CheckoutFormShipCanton,
  CheckoutFormShipCity,
  CheckoutFormShipPost,
} from "./CheckoutFormComponents/CheckoutFormFields.jsx";

import {
  CheckoutContactSection,
  CheckoutPaymentSection,
  CheckoutShippingSection,
} from "./CheckoutFormComponents/CheckoutFormSection.jsx";

import { CheckoutFormSubmit } from "./CheckoutFormComponents/CheckoutFormSubmit.jsx";

export default function CheckoutFormPanel({ onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // Turns the named inputs into a plain object, e.g. { email: "...", cardNumber: "...", ... }
    const formData = Object.fromEntries(new FormData(event.target));

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await onSubmit(formData);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="checkoutFormPanel">
      <form onSubmit={handleSubmit}>
        <CheckoutContactSection>
          <CheckoutFormEmail />
        </CheckoutContactSection>
        <CheckoutPaymentSection>
          <CheckoutFormCardNum />
          <div className="checkoutFormFieldRow">
            <CheckoutFormCardExp />
            <CheckoutFormCardCVC />
          </div>
        </CheckoutPaymentSection>
        <CheckoutShippingSection>
          <CheckoutFormShipAddress />
          <div className="checkoutFormFieldRow">
            <CheckoutFormShipCity />
            <CheckoutFormShipCanton />
            <CheckoutFormShipPost />
          </div>
        </CheckoutShippingSection>
        <CheckoutFormSubmit isSubmitting={isSubmitting} submitError={submitError} />
      </form>
    </div>
  );
}
