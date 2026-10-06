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
  name: 'Clavier',
  price: 49.90,
  image: 'https://via.placeholder.com/150',
  onAddToCart: () => alert('Produit ajouté au panier'),
},
};