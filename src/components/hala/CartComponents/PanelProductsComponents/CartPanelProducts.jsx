import CartPanelArticle from "./CartPanelArticle.jsx";

export default function CartPanelProducts({ products, invisibleProducts }) {

	function addProduct() {
		if (invisibleProducts.length === 0) return;
		const productToAdd = invisibleProducts[Math.floor(Math.random() * invisibleProducts.length)];
		return productToAdd.addProduct();
	}
	
	return (
		<div className="cartPanelProducts cartGap cartPadding cartBorder cartPanelFlex">
			<div className="cartUnderline cartTitle">Produits
				<button className="cartAddProduct" onClick={addProduct}>Ajouter un produit</button>
			</div>

			{products.map((product) => (
				<CartPanelArticle product={product} key={product.id} />
			))}
		</div>
	);
}
