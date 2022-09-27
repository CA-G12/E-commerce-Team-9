import image from './chambraysky.png';
import '../../style/details.css';

function ProductDetails() {
  return (
    <div className="details">
      <img src={image} alt="" className="product-img" />
      <div className="product-details">
        <h1>Product Name</h1>
        <p className="price">
          Price:
          <span> 500</span>
          $
        </p>
        <p className="category">
          Category:
          {' '}
          <span>Bag</span>
        </p>
        <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, placeat.</p>
        <button type="submit">Add To Chart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
