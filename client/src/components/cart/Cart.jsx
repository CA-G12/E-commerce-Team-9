import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../../style/cart.css';
import Header from '../landingPage/Header';

function Cart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/cart').then((res) => setData(res.data));
  }, []);

  const deleteProdcut = (id) => {
    axios({
      method: 'delete',
      url: `/api/v1/products/${id}`,
    }).then(() => {
      setData(data.filter((dd) => dd.id !== id));
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Deleted successfully',
      });
    }).catch((err) => console.log(err));
  };

  if (!data) return <div>Loading ...</div>;

  return (
    <>
      <Header />
      <div id="cart">
        {data.map((ele) => (
          <div className="cart-product" key={ele.id}>
            <img src={ele.image} alt={ele.name} />
            <div className="cart-info">
              <div className="info">
                <h1>{ele.name}</h1>
                <div className="description">{ele.description}</div>
                <div className="price">
                  Price:
                  <span>
                    {' '}
                    {ele.price}
                  </span>
                  {' '}
                  $
                </div>
                <div className="quantity">
                  Quantity:
                  <span>
                    {' '}
                    {ele.count}
                  </span>
                </div>
              </div>
            </div>
            <button type="button" onClick={() => deleteProdcut(ele.id)}>
              <i
                className="fa-solid fa-trash"

              />
            </button>

          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
