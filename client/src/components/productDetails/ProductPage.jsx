/* eslint-disable no-alert */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to add this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setCounter(result.isConfirmed);
        Swal.fire(
          'Added!',
          'Your product has been added.',
          'success',
        );
      }
    });
  };
  if (!data) return <div>Loading ...</div>;
  return (
    <>
      <Header />
      <div className="details">
        <img src={data.image} alt={data.name} className="product-img" />
        <div className="product-details">
          <h1>{data.name}</h1>
          <p className="detailsPrice">
            Price:
            <span>
              {' '}
              {data.price}
              $
            </span>
          </p>
          <p className="detailsCategory">
            Category:
            {' '}
            <span>{data.category}</span>
          </p>
          <p className="detailsDescription">{data.description}</p>
          <button className="addToCart" type="submit" onClick={confirmAdding}>Add To Chart</button>
        </div>
      </div>

    </>

  );
}

export default ProductDetails;
