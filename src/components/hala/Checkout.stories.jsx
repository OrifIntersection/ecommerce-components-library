import React from "react";
import { useState } from "react";
import { fn } from "storybook/test";
import { Checkout } from "./Checkout";

// Placeholder endpoint: there is no backend yet
const CHECKOUT_URL = "/api/checkout";

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

  } catch (error) {
    setSubmitError(error.message);
  } finally {
    setIsSubmitting(false);
  }

  return response;
}

export default {
  title: "HaLa/Checkout",
  component: Checkout,
  tags: ["autodocs"],
  argTypes: {},
};

export const Primary = {
  args: {
    handleSubmit: fn(handleSubmit),
  },
};
