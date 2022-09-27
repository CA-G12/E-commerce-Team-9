import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import '../../../style/card.css';

function CardContainer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="cards">
      {data.map((ele) => <ProductCard data={ele} />)}
    </div>
  );
}

export default CardContainer;
