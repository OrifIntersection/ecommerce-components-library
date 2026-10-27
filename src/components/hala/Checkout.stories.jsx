import React from 'react';
import { fn } from 'storybook/test';
import { Checkout } from './Checkout';

// Placeholder endpoint: there is no backend yet, so in Storybook this request returns a 404.
const CHECKOUT_URL = '/api/checkout';

// Generic form POST handler: sends the form values as JSON and throws if the server rejects them.
async function postFormData(url, formData) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status} ${response.statusText})`);
  }

  return response;
}

export default {
  title: 'HaLa/Checkout',
  component: Checkout,
  tags: ['autodocs'],
  argTypes: {},
};

export const Primary = {
  args: {
    // fn() records each call and its form data in the Actions panel
    onSubmit: fn((formData) => postFormData(CHECKOUT_URL, formData)),
  },
};
