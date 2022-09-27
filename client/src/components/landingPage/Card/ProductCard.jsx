import '../../../style/card.css';

function ProductCard() {
  return (
    <div className="card">
      <div className="product-image">
        <img src="https://images.asos-media.com/products/tommy-jeans-flag-logo-nylon-large-shoulder-bag-in-light-blue/202797305-1-chambraysky?$n_480w$&wid=476&fit=constrain" alt="" />
      </div>
      <div className="product-name">
        <h4>Product name</h4>
        <span>$500</span>
      </div>
      <div className="show-details">
        <p>Bags</p>
        <button type="button">Details</button>
      </div>
    </div>
  );
}

export default ProductCard;
