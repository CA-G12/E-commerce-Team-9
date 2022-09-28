/* eslint-disable no-alert */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/details.css';
import Header from '../landingPage/Header';

function ProductDetails() {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`/api/v1/product/${productId}/details`)
      .then((res) => setData(res.data))
      .catch((err) => console.log('err', err));
  }, []);

  useEffect(() => {
    if (!counter) return;
    axios({
      method: 'post',
      url: `/api/v1/products/${productId}`,
    }).then((res) => {
      setCounter(false);
      console.log(res.data);
    });
  }, [counter]);

  const confirmAdding = () => {
    setCounter(window.confirm('You want to add it to cart?'));
  };
  if (!data) return <div>Loading ...</div>;
  return (
    <>
      <Header />
      <div className="details">
        <img src={data.image} alt={data.name} className="product-img" />
        <div className="product-details">
          <h1>{data.name}</h1>
          <p className="price">
            Price:
            <span>
              {' '}
              {data.price}
            </span>
            $
          </p>
          <p className="category">
            Category:
            {' '}
            <span>{data.category}</span>
          </p>
          <p className="description">{data.description}</p>
          <button type="submit" onClick={confirmAdding}>Add To Chart</button>
        </div>
      </div>

    </>

  );
}

export default ProductDetails;
