import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Variante visuelle du bouton',
    },
    children: {
      control: 'text',
      description: 'Texte ou contenu du bouton',
    },
    onClick: { action: 'clicked' },
  },
};

// Story principale (Variante par défaut)
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Bouton Principal',
  },
};

// Variante Secondaire
export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Bouton Secondaire',
  },
};

// Exemple d'état ou combinaison personnalisée
export const LongText = {
  args: {
    variant: 'primary',
    children: 'En savoir plus sur nos fonctionnalités',
  },
};
