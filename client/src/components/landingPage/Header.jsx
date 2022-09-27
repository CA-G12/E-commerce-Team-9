import '../../style/landingPage.css';
import image from './logo.png';

function Header() {
  return (
    <header>
      <div><img src={image} alt="" className="logo" /></div>
      <input type="text" placeholder="Search..." />
      <div className="get-started">
        <button type="button">Login</button>
        <button type="button">Signup</button>
        <i className="fa-solid fa-cart-shopping" />
      </div>
    </header>
  );
}

export default Header;
