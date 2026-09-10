import React from 'react';
import { ProductItem } from './ProductItem';

export default {
  title: 'CaDn/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
  argTypes: {},
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Composant Principal',
  },
};