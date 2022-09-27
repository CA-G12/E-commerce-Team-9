/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function Aside({
  category, changeCategory, price, changeAscending, changeDescending,
}) {
  return (
    <aside>
      <CategoryFilter changeCategory={changeCategory} category={category} />
      <PriceFilter priceAsc={price} ascending={changeAscending} descending={changeDescending} />
    </aside>
  );
}

export default Aside;
