import { Link } from 'react-router-dom';

const divStyle = {
  margin: '15rem auto',
  textAlign: 'center',
};

const pStyle = {
  fontSize: '1.8rem',
  margin: '1rem',
  fontWeight: '700',
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '1.3rem',
  fontWeight: '600',
  color: 'rgb(125, 105, 105)',
};

function Unauthorized() {
  return (
    <div style={divStyle}>
      <p style={pStyle}>You are Not Unauthorized</p>
      <Link to="/login" style={linkStyle}>Login First</Link>
    </div>
  );
}

export default Unauthorized;
