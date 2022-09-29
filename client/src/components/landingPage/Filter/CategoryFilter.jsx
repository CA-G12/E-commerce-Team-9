/* eslint-disable react/no-array-index-key */
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
        {categories.map((ele, index) => (
          <label htmlFor={ele} key={index}>
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
