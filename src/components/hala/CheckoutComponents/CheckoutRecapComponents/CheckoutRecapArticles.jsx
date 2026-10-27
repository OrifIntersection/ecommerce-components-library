function CheckoutRecapArticle({ article }) {
  const { image, title, quantity, price } = article;
  const totalPrice = price * quantity;

  return (
    <div className="checkoutRecapArticle">
      <img className="checkoutRecapArticleImage" src={image} alt={title} />
      <div className="checkoutRecapArticleTitle">{title}</div>
      <div className="checkoutRecapArticleQuantity">{quantity}</div>
      <div className="checkoutRecapArticlePrice">{totalPrice.toFixed(2)}</div>
    </div>
  );
}

export function CheckoutRecapArticles({ articles }) {
  return (
    <div className="checkoutRecapArticles">
      Your order
      {articles.map((article) => (
        <CheckoutRecapArticle article={article} key={article.id} />
      ))}
    </div>
  );
}
