import React from 'react';
import { OrderItem } from './OrderItem';

export default {
  title: 'CaDn/OrderItem',
  component: OrderItem,
  tags: ['autodocs'],
  argTypes: {},
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Composant Principal',
  },
};