import React from 'react';
import { Checkout } from './Checkout';

export default {
  title: 'HaLa/Checkout',
  component: Checkout,
  tags: ['autodocs'],
  argTypes: {},
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Composant Principal',
  },
};