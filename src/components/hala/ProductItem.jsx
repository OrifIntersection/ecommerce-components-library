import "./ProductItemComponents/ProductItem.css";
import ProductPicturesPanel from "./ProductItemComponents/ProductPicturesPanel";
import ProductDetailsPanel from "./ProductItemComponents/ProductDetailsPanel";
import product from "./ProductItemComponents/product.json" with { type: "json" };

function ProductPanels({ product }) {
	const { title, subtitle, price, description, isFavorite, images } = product;

	return (
		<div className="productPanels">
			<ProductPicturesPanel images={images} />
			<ProductDetailsPanel
				title={title}
				subtitle={subtitle}
				price={price}
				description={description}
				isFavorite={isFavorite}
			/>
		</div>
	);
}

export function ProductItem() {
	return (
		<div className="productItem">
			<ProductPanels product={product} />
		</div>
	);
}
