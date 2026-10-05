import { useState } from "react";

import CartPanelProducts from "./PanelProductsComponents/CartPanelProducts.jsx";
import CartPanelSummary from "./PanelSummaryComponents/CartPanelSummary.jsx";

export default function CartPanels({ products: initialProducts }) {
	const [products, setProducts] = useState(initialProducts);

	function updateProductQuantity(title, quantity) {
		return setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.title === title
					? { ...product, quantity: Math.max(0, quantity) }
					: product,
			),
		);
	}

	const productsWithTotals = products.map((p) => ({
		...p,
		totalPrice: (p.price * p.quantity).toFixed(2),
		setQuantity: quantity => updateProductQuantity(p.title, quantity)
	}));

	return (
		<div className="cartPanels cartGap ">
			<CartPanelProducts products={productsWithTotals} />
			<CartPanelSummary products={productsWithTotals} />
		</div>
	);
}
