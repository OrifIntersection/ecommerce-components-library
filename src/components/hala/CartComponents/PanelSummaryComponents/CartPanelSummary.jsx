import CartSummaryArticle from "./CartSummaryArticle.jsx";

function PanelSummaryTotal({ value }) {
	return <div className="cartPanelSummaryTotal cartUnderline">{value}</div>;
}

function PanelSummaryBuy() {
	return (
		<button className="cartPanelSummaryBuy cartBorder">
			Acheter Maintenant
		</button>
	);
}

export default function CartPanelSummary({ products }) {
	return (
		<div className="cartPanelSummary cartPadding cartBorder cartPanelFlex cartGap">
			<div className="cartUnderline cartTitle">Votre Commande</div>
			<div className="cartPanelSummaryArticles cartBackground cartPadding cartPanelFlex cartGap">
				{products.map((product) => (
					<CartSummaryArticle product={product} key={product.id} />
				))}
			</div>
			<PanelSummaryTotal
				value={products
					.reduce((acc, product) => acc + parseFloat(product.totalPrice), 0)
					.toFixed(2)}
			/>
			<PanelSummaryBuy />
		</div>
	);
}
