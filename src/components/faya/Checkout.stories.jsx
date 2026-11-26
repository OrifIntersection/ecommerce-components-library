import React from 'react';
import { Checkout } from './Checkout';
import { fn } from 'storybook/test';
import { handleForms } from './assets/function/handleForms';
import data from './data/Cart.json';

export default {
  title: 'FaYa/Checkout',
  component: Checkout,
  tags: ['autodocs'],
  argTypes: {},
};

export const Primary = {
  args: {
    variant: 'primary',
    // children: 'Suivant',
    data: data,
    HandleForms: handleForms
  }
};