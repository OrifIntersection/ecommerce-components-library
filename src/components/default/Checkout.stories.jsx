import React from 'react';
import { Checkout } from './Checkout';

export default {
  title: 'Default/Checkout',
  component: Checkout,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Variante visuelle du composant',
    },
    children: {
      control: 'text',
      description: 'Texte ou contenu du composant',
    },
    onClick: { action: 'clicked' },
  },
};

// Story principale (Variante par défaut)

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Composant Principal',
  },
};

// Variante Secondaire
export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Composant Secondaire',
  },
};
