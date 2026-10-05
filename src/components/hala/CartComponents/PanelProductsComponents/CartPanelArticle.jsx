function CartPanelArticleImage({image}) {
	return (
		<img className='cartPanelArticleImage' src={image}/>
	)
}

function CartPanelArticleTitle({title}) {
	return (
		<div className='cartPanelArticleTitle cartUnderline'>{title}</div>
	)
}

function CartPanelArticleDelete() {
	return (
		<div className='cartPanelArticleDelete'>🗑</div>
	)
}

function CartPanelArticleInfo({totalPrice, quantity}) {
	return (
		<div className='cartPanelArticleInfo articlePadding'>
			<div className='cartPanelArticlePrice cartUnderline'>{totalPrice}</div>
			<div className='cartPanelArticleQuantity cartBorder'>
				<button >-</button>
				<div className='quantityValue cartBackground'>{quantity}</div>
				<button >+</button>
			</div>
		</div>
	)
}

export default function CartPanelArticle({ product }) {
	const { image, totalPrice, title, quantity } = product;
	
	return (
		<div className='cartPanelArticle cartGap articlePadding cartBackground'>
			<CartPanelArticleImage image={image} />
			<CartPanelArticleTitle title={title} />
			<CartPanelArticleDelete />
			<CartPanelArticleInfo totalPrice={totalPrice} quantity={quantity} />
		</div>
	)
}