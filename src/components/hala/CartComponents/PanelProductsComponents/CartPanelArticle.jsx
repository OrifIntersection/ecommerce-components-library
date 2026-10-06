function CartPanelArticleImage({ image }) {
	return <img className="cartPanelArticleImage" src={image} />;
}

function CartPanelArticleTitle({ title }) {
	return <div className="cartPanelArticleTitle cartUnderline">{title}</div>;
}

function CartPanelArticleDelete({ deleteProduct }) {
	return (
		<button className="cartPanelArticleDelete" onClick={deleteProduct}>
			🗑
		</button>
	);
}

function CartPanelArticleInfo({ totalPrice, quantity, increment, decrement }) {
	return (
		<div className="cartPanelArticleInfo articlePadding">
			<div className="cartPanelArticlePrice cartUnderline">{totalPrice}</div>
			<div className="cartPanelArticleQuantity cartBorder">
				<button onClick={decrement}>-</button>
				<div className="quantityValue cartBackground">{quantity}</div>
				<button onClick={increment}>+</button>
			</div>
		</div>
	);
}

export default function CartPanelArticle({ product }) {
	const {
		image,
		totalPrice,
		title,
		quantity,
		deleteProduct,
		incrQuantity,
		decrQuantity,
	} = product;

	return (
		<div className="cartPanelArticle cartGap articlePadding cartBackground">
			<CartPanelArticleImage image={image} />
			<CartPanelArticleTitle title={title} />
			<CartPanelArticleDelete deleteProduct={deleteProduct} />
			<CartPanelArticleInfo
				totalPrice={totalPrice}
				quantity={quantity}
				increment={incrQuantity}
				decrement={decrQuantity}
			/>
		</div>
	);
}
