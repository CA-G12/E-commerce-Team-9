import { useState, useEffect } from 'react';
import CardContainer from './Card/CardContainer';
import Aside from './Filter/Aside';
import Header from './Header';

function LandingPage() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('all');
  const [priceAsc, setPriceAsc] = useState(false);
  const [priceDesc, setPriceDesc] = useState(false);

  useEffect(() => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  useEffect(() => {
    if (!priceAsc) return;
    fetch('/api/v1/priceAsc')
      .then((res) => res.json())
      .then((dd) => setData(dd));
  }, [priceAsc]);

  useEffect(() => {
    if (!priceDesc) return;
    fetch('/api/v1/priceDesc')
      .then((res) => res.json())
      .then((dd) => setData(dd));
  }, [priceDesc]);

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const changeAscending = () => {
    setPriceAsc(true);
  };

  const changeDescending = () => {
    setPriceDesc(true);
  };

  return (
    <>
      <Header />
      <section className="container">
        <Aside
          changeCategory={changeCategory}
          category={category}
          changeAscending={changeAscending}
          changeDescending={changeDescending}
        />
        <CardContainer data={data} category={category} />
      </section>
    </>
  );
}

export default LandingPage;
