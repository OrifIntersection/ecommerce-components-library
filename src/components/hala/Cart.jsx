import React from 'react';
import './CartComponents/Cart.css'

export function Cart({ }) {

	return (
		<div className='cart cartPadding cartBorder'>
			<div className='cartPanels cartGap '>
				<div className='cartPanelProducts cartGap cartPadding cartBorder cartPanelFlex'>
					<div className='cartUnderline cartTitle'>Produits</div>
					<div className='cartPanelArticle cartGap articlePadding cartBackground'>
						<img className='cartPanelArticleImage'></img>
						<div className='cartPanelArticleTitle cartUnderline'>Article</div>
						<div className='cartPanelArticleDelete'>🗑</div>
						<div className='cartPanelArticleInfo articlePadding'>
							<div className='cartPanelArticlePrice cartUnderline'>10.95</div>
							<div className='cartPanelArticleQuantity cartBorder'>
								<button >-</button>
								<div className='quantityValue cartBackground'>1</div>
								<button >+</button>
							</div>
						</div>
					</div>
				</div>
				<div className='cartPanelSummary cartPadding cartBorder cartPanelFlex cartGap'>
					<div className='cartUnderline cartTitle'>Votre Commande</div>
					<div className='cartPanelSummaryArticles cartBackground cartPadding cartPanelFlex cartGap'>
						<div className='cartPanelSummaryArticle'>
							<div className='summaryArticleTitle cartPadding'>Article</div>
							<div className='summaryArticleQuantity cartPadding'>1</div>
							<div className='summaryArticlePrice cartPadding'>10.95</div>
						</div>
					</div>
					<div className='cartPanelSummaryTotal cartUnderline'>10.95</div>
					<button className='cartPanelSummaryBuy cartBorder'>Acheter Maintenant</button>
				</div>				
			</div>
		</div>
  );
}