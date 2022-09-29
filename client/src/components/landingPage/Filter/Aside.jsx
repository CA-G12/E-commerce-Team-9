/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function Aside({
  category, changeCategory, price, changeAscending, changeDescending,
}) {
  return (
    <section className="nav">
      <CategoryFilter changeCategory={changeCategory} category={category} />
      <PriceFilter priceAsc={price} ascending={changeAscending} descending={changeDescending} />
    </section>
  );
}

export default Aside;
