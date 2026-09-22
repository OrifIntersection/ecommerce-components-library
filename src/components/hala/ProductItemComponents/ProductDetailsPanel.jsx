import { useState } from "react"; 

function ProductDetailsTitle() {
	return (
		<div className="productDetailsTitle">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			<div className="productDetailsSubtitle">Phasellus eleifend porta ligula nec mattis.</div>
		</div>
	);
}

function ProductDetailsPrice({ quantity, price }) {
	
	return <div className="productDetailsPrice">Price: {quantity > 0 ? (quantity * price).toFixed(2) : price.toFixed(2)}</div>;
}

function ProductDetailsDescription() {
	return (
		<div className="productDetailsDescription">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend,
				sem eu egestas bibendum, nibh est cursus lacus, sit amet euismod justo
				leo at nulla. Aliquam erat volutpat. Nullam volutpat purus in velit
				molestie molestie. Sed aliquam nunc ante, id suscipit arcu feugiat a.
				Curabitur dapibus sapien in arcu congue scelerisque. Praesent vitae
				mauris vel metus cursus venenatis eget vitae leo. Maecenas tortor est,
				ornare vitae porta in, lobortis eget arcu. Aliquam et felis turpis.
				Vivamus vestibulum eros sit amet libero rhoncus, quis vulputate ipsum
				fringilla. Duis sodales blandit molestie.
			</p>
		</div>
	);
}

function QuantityButtons({quantity, setQuantity}) {
	const increment = () => setQuantity(q => q + 1);
	const decrement = () => setQuantity(q => q == 0 ? q : q - 1);
	
	return (
	<div className="quantityButtons">
		<button onClick={decrement}  className="quantityButton">-</button>
			<div className="productAmountChosen">{quantity}</div>
		<button onClick={increment}  className="quantityButton">+</button>
	</div>);
}

function AddToCartButton() {
	return (
		<button className="addToCartButton">Add To Cart</button>
	)
}

function FavoriteButton({favorite, setFavorite}) {
	const handleFavorite = () => setFavorite(fav => fav ? false : true)
	return (
		<button onClick={handleFavorite} className="favoriteButton">{favorite ? "♥" : "♡"}</button>
	)
}

export default function ProductDetailsPanel({ title, description }) {
	const [quantity, setQuantity] = useState(0);
	const [favorite, setFavorite] = useState(false);
	const price = 12;
	
	return (
		<div className="productDetailsPanel">
			<ProductDetailsTitle />
			<ProductDetailsPrice quantity={quantity} price={price} />
			<ProductDetailsDescription />
			
			<QuantityButtons quantity={quantity} setQuantity={setQuantity} />
			<AddToCartButton />
			<FavoriteButton favorite={favorite} setFavorite={setFavorite} />
		</div>
	);
}
