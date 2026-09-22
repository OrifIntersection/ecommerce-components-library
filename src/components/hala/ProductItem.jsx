import React from "react";

import "./ProductItemComponents/ProductItem.css";
import ProductPicturesPanel from "./ProductItemComponents/ProductPicturesPanel"
import ProductDetailsPanel from "./ProductItemComponents/ProductDetailsPanel"

function ProductPanels() {
	return (
		<div className="productPanels">
			<ProductPicturesPanel />
			<ProductDetailsPanel />
		</div>
	)
}

export function ProductItem() {
	return (
		<div className="productItem">
			<ProductPanels />
		</div>
	);
}
