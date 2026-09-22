function ProductPicturesListed() {
	return (
		<div className="productPicturesListed">
			<img></img>
			<img></img>
			<img></img>
			<img></img>
		</div>
	)
}

function ProductPicturesSelected() {
	return (
		<div className="productPicturesSelected">
			<img></img>
		</div>
	)
}

export default function ProductPicturesPanel() {
	return (
		<div className="productPicturesPanel">
			<ProductPicturesListed />
			<ProductPicturesSelected />
		</div>
	)
}