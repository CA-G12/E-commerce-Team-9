/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import '../../style/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import image from '../signup/Asos-black-logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!submit) return;
    axios({
      method: 'POST',
      url: '/api/v1/login',
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.status === 200) {
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
            title: 'Signed up successfully',
          });
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  }, [submit]);

  return (
    <div className="main">
      <Link to="/">
        {' '}
        <img className="logo" src={image} alt="Asos-black-logo" />
      </Link>

      <div className="form">
        <div className="headerForm">
          <Link to="/signup" className="seconde">JOIN</Link>
          <Link to="//" className="check">SIGN IN</Link>
        </div>
        <div className="inputs">

          <label htmlFor="email">EMAIL ADDRESS:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />

          <label htmlFor="password">PASSWORD:</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />

          <a href="/">New to asos ?</a>
          <button onClick={() => { setSubmit(true); }}>SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
