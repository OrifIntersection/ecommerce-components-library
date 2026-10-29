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

export default function CheckoutFormPanel({ handleSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);


  function submitForm(event) {
    handleSubmit(event, { setIsSubmitting, setSubmitError });
  }

  return (
    <div className="checkoutFormPanel">
      <form onSubmit={submitForm}>
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
