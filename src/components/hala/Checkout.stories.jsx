import React from 'react';
import { fn } from 'storybook/test';
import { Checkout } from './Checkout';

// Placeholder endpoint: there is no backend yet
const CHECKOUT_URL = '/api/checkout';

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
    onSubmit: fn((formData) => postFormData(CHECKOUT_URL, formData)),
  },
};
