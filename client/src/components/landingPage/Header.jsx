import '../../style/landingPage.css';
import { Link } from 'react-router-dom';
import image from './logo.png';

function Header() {
  return (
    <header>
      <div>
        <Link to="/products"><img src={image} alt="" className="logo" /></Link>
      </div>
      <input type="text" placeholder="Search..." />
      <div className="get-started">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping" /></Link>
      </div>
    </header>
  );
}

export default Header;
