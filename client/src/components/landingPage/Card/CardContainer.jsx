/* eslint-disable react/prop-types */
import ProductCard from './ProductCard';
import '../../../style/card.css';

function CardContainer({ data, category }) {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="cards">
      {category !== 'all' ? data.filter((element) => element.category === category).map((e) => <ProductCard data={e} key={e.id} />)
        : data.map((ele) => <ProductCard data={ele} key={ele.id} />)}
    </div>
  );
}

export default CardContainer;
