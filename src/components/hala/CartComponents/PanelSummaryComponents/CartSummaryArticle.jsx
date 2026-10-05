function SummaryArticleTitle({ title }) {
	return <div className="summaryArticleTitle cartPadding">{title}</div>;
}

function SummaryArticleQuantity({ quantity }) {
	return <div className="summaryArticleQuantity cartPadding">{quantity}</div>;
}

function SummaryArticlePrice({ totalPrice }) {
	return <div className="summaryArticlePrice cartPadding">{totalPrice}</div>;
}

export default function CartSummaryArticle({ product }) {
	const { title, totalPrice, quantity } = product;

	return (
		<div className="cartPanelSummaryArticle">
			<SummaryArticleTitle title={title} />
			<SummaryArticleQuantity quantity={quantity} />
			<SummaryArticlePrice totalPrice={totalPrice} />
		</div>
	);
}
