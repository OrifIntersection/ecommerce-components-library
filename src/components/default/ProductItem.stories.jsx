import React from 'react';
import { ProductItem } from './ProductItem';

export default {
  title: 'Default/ProductItem',
  component: ProductItem,
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
