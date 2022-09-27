import { useState, useEffect } from 'react';
import CardContainer from './Card/CardContainer';
import Aside from './Filter/Aside';
import Header from './Header';

function LandingPage() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  useEffect(() => {
    fetch('/api/v1/priceAsc').then((res) => res.json()).then((dd) => console.log(dd));
  });

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <Header />
      <section className="container">
        <Aside changeCategory={changeCategory} category={category} />
        <CardContainer data={data} category={category} />
      </section>
    </>
  );
}

export default LandingPage;
