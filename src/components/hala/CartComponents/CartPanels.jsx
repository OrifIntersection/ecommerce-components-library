import { useState } from "react";

import CartPanelProducts from "./PanelProductsComponents/CartPanelProducts.jsx";
import CartPanelSummary from "./PanelSummaryComponents/CartPanelSummary.jsx";

export default function CartPanels({ products: initialProducts }) {
	const [products, setProducts] = useState(initialProducts);

	function deleteProduct(id) {
		return setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id
					? { ...product, shown: false, quantity: 0 }
					: product,
			),
		);
	}
	
	function addProduct(id) {
		return setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id
					? { ...product, shown: true, quantity: 1 }
					: product,
			),
		);
	}
	
	function updateProductQuantity(id, change) {
		return setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id
					? { ...product, quantity: Math.max(1, product.quantity + change) }
					: product,
			),
		);
	}

	const productsWithTotals = products.map((p) => ({
		...p,
		totalPrice: (p.price * p.quantity).toFixed(2),
		deleteProduct: () => deleteProduct(p.id),
		addProduct: () => addProduct(p.id),
		incrQuantity: () => updateProductQuantity(p.id, 1),
		decrQuantity: () => updateProductQuantity(p.id, -1)
	}));

	const visibleProducts = productsWithTotals.filter((p) => p.shown && (p.quantity > 0))
	const invisibleProducts = productsWithTotals.filter((p) => !p.shown && (p.quantity === 0))

	return (
		<div className="cartPanels cartGap ">
			<CartPanelProducts products={visibleProducts} invisibleProducts={invisibleProducts} />
			<CartPanelSummary products={visibleProducts} />
		</div>
	);
}
