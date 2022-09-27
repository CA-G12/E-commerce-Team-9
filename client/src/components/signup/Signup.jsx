/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import '../../style/signup.css';
import asos from './Asos-black-logo.png';

function Signup() {
  return (
    <div className="main">
      <img className="logo" src={asos} alt="Asos-black-logo" />
      <form className="form" action="">
        <div className="headerForm">
          <a href="/" className="check seconde">JOIN</a>
          <a href="/" className="">SIGN IN</a>
        </div>
        <div className="inputs">

          <label htmlFor="email">EMAIL ADDRESS:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="username">USERNAME</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">PASSWORD:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="password">CONFIRM PASSWORD:</label>
          <input type="password" id="password" name="password" />

          <a href="/">Already have an account ?</a>
          <button>SIGN UP</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
