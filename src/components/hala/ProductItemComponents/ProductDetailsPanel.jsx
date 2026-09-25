import { useState } from "react";

function ProductDetailsTitle({ title, subtitle }) {
	return (
		<div className="productDetailsTitle">
			{title}
			<div className="productDetailsSubtitle">{subtitle}</div>
		</div>
	);
}

function ProductDetailsPrice({ quantity, price }) {
	return (
		<div className="productDetailsPrice">
			Price: {quantity > 0 ? (quantity * price).toFixed(2) : price.toFixed(2)}
		</div>
	);
}

function ProductDetailsDescription({ description }) {
	return <div className="productDetailsDescription">{description}</div>;
}

function QuantityButtons({ quantity, setQuantity }) {
	const increment = () => setQuantity((q) => q + 1);
	const decrement = () => setQuantity((q) => (q == 0 ? q : q - 1));

	return (
		<div className="quantityButtons">
			<button onClick={decrement} className="quantityButton">
				-
			</button>
			<div className="productAmountChosen">{quantity}</div>
			<button onClick={increment} className="quantityButton">
				+
			</button>
		</div>
	);
}

function AddToCartButton() {
	return <button className="addToCartButton">Add To Cart</button>;
}

function FavoriteButton({ favorite, setFavorite }) {
	return (
		<button
			onClick={() => setFavorite((fav) => (fav ? false : true))}
			className="favoriteButton"
		>
			{favorite ? "♥" : "♡"}
		</button>
	);
}

export default function ProductDetailsPanel({
	title,
	subtitle,
	price,
	description,
	isFavorite,
}) {
	const [quantity, setQuantity] = useState(0);
	const [favorite, setFavorite] = useState(isFavorite);

	return (
		<div className="productDetailsPanel">
			<ProductDetailsTitle title={title} subtitle={subtitle} />
			<ProductDetailsPrice quantity={quantity} price={price} />
			<ProductDetailsDescription description={description} />

			<QuantityButtons quantity={quantity} setQuantity={setQuantity} />
			<AddToCartButton />
			<FavoriteButton favorite={favorite} setFavorite={setFavorite} />
		</div>
	);
}
