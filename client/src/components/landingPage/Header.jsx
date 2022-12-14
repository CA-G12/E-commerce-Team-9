/* eslint-disable react/prop-types */
import '../../style/landingPage.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState, useEffect } from 'react';
import image from './logo.png';

function Header({ filterBySearch }) {
  const [isLogged, setIsLogged] = useState(false);
  const clearToken = () => {
    axios.post('/api/v1/logout')
      .then(() => {
        setIsLogged(false);
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
          title: 'Logged out successfully',
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get('/api/v1/isLogged')
      .then((res) => setIsLogged(res.data.isLogged));
  }, []);

  return (
    <header>
      <div>
        <Link to="/"><img src={image} alt="" className="logo" /></Link>
      </div>
      <input type="text" placeholder="Search..." onChange={(e) => { filterBySearch(e.target.value); }} />
      <div className="get-started">
        {!isLogged ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : <Link to="/" onClick={clearToken}>Logout</Link>}
        <Link to="/cart"><i className="fa-solid fa-cart-shopping" /></Link>
      </div>
    </header>
  );
}

export default Header;
