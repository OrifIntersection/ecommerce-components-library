import React from 'react';
import './CartComponents/Cart.css'
import CartPanels from './CartComponents/CartPanels'
import products from "./CartComponents/products.json" with { type: "json" };


export function Cart({ }) {
	return (
		<div className='cart cartPadding cartBorder'>
			<CartPanels products={products} />
		</div>
  );
}