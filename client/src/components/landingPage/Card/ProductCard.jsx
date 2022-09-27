/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../../../style/card.css';

function ProductCard({ data }) {
  return (
    <div className="card">
      <div className="product-image">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="product-name">
        <h4>{data.name}</h4>
        <p>
          $
          {data.price}
        </p>
      </div>
      <div className="show-details">
        <p>{data.category}</p>
        <Link to={`/product/${data.id}/details`}><button type="button">Details</button></Link>

      </div>
    </div>
  );
}

export default ProductCard;
