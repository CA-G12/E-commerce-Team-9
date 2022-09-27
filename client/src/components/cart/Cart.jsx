import '../../style/cart.css';
import image from './chambraysky.png';

function Cart() {
  return (
    <div id="cart">
      <div className="cart-product">
        <img src={image} alt="" />
        <div className="cart-info">
          <div className="info">
            <h1>Product Name</h1>
            <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas reiciendis deserunt corrupti quos magni illo blanditiis suscipit earum assumenda asperiores!</div>
            <div className="price">
              Price:
              <span> 500</span>
              {' '}
              $
            </div>
            <div className="quantity">
              Quantity:
              <span> 2</span>
            </div>
          </div>
        </div>
        <i className="fa-solid fa-trash" />
      </div>
      <div className="cart-product">
        <img src={image} alt="" />
        <div className="cart-info">
          <div className="info">
            <h1>Product Name</h1>
            <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas reiciendis deserunt corrupti quos magni illo blanditiis suscipit earum assumenda asperiores!</div>
            <div className="price">
              Price:
              <span> 500</span>
              {' '}
              $
            </div>
            <div className="quantity">
              Quantity:
              <span> 2</span>
            </div>
          </div>
        </div>
        <i className="fa-solid fa-trash" />
      </div>
    </div>
  );
}

export default Cart;
