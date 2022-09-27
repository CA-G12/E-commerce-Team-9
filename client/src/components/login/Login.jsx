/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import '../../style/login.css';
import asos from '../signup/Asos-black-logo.png';

function Login() {
  return (
    <div className="main">
      <img className="logo" src={asos} alt="Asos-black-logo" />
      <form className="form" action="">
        <div className="headerForm">
          <a href="/" className="seconde">JOIN</a>
          <a href="/" className="check">SIGN IN</a>
        </div>
        <div className="inputs">

          <label htmlFor="email">EMAIL ADDRESS:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">PASSWORD:</label>
          <input type="password" id="password" name="password" />

          <a href="/">New to asos ?</a>
          <button>SIGN IN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
