/* eslint-disable react/prop-types */
const categories = [
  'all',
  'dresses',
  'coats & jackets',
  'jeans',
  'shoes',
  'bags',
  'accessories',
];

function CategoryFilter({ changeCategory, category }) {
  return (
    <section className="category">
      <h4>Categories</h4>
      <div className="category-list">
        {categories.map((ele) => (
          <label htmlFor={ele} key={ele.id}>
            <input
              type="radio"
              name="categories"
              id={ele}
              value={ele}
              checked={ele === category}
              onChange={changeCategory}
            />
            {ele}
          </label>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;
