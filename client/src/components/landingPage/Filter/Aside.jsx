/* eslint-disable react/prop-types */
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function Aside({ category, changeCategory }) {
  return (
    <aside>
      <CategoryFilter changeCategory={changeCategory} category={category} />
      <PriceFilter />
    </aside>
  );
}

export default Aside;
