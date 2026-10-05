import CartPanelArticle from './CartPanelArticle.jsx'

export default function CartPanelProducts({products}) {
	return (
		<div className='cartPanelProducts cartGap cartPadding cartBorder cartPanelFlex'>
			<div className='cartUnderline cartTitle'>Produits</div>
			{products.map(product => <CartPanelArticle product={product} key={product.title} /> )}
		</div>
	)
}