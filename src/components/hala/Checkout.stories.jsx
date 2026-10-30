import { fn } from "storybook/test";
import { Checkout } from "./Checkout";

import articles from "./CheckoutComponents/articles.json" with { type: "json" };
const SHIPPING_FEE = 7.95;

// Placeholder endpoint: there is no backend yet
const CHECKOUT_URL = "/api/checkout";

// So this is a somewhat 'messy' implementation
// Basically, the CheckoutFormPanel component still needs to supply two states:
// setIsSubmitting and setSubmitError
// The form extraction and the POST handling are generic, however
async function handleSubmit(event, { setIsSubmitting, setSubmitError }) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));

  try {
    const response = await fetch(CHECKOUT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(
        `Submission failed (${response.status} ${response.statusText})`,
      );
    }
    return response;
  } catch (error) {
    setSubmitError(error.message);
  } finally {
    setIsSubmitting(false);
  }
}

const articlesWithTotals = articles.map((article) => ({
  ...article,
  totalPrice: article.price * article.quantity,
}));

export default {
  title: "HaLa/Checkout",
  component: Checkout,
  tags: ["autodocs"],
  argTypes: {},
};

export const Primary = {
  args: {
    handleSubmit: fn(handleSubmit),
    shippingFee: SHIPPING_FEE,
    articles: articlesWithTotals,
  },
};
