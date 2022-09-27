const categories = [
  'All',
  'Dresses',
  'Coats & Jackets',
  'Jeans',
  'Shoes',
  'Bags',
  'Accessories',
];

function CategoryFilter() {
  return (
    <section className="category">
      <h4>Categories</h4>
      <div className="category-list">
        {categories.map((ele) => (
          <label htmlFor={ele} key={ele}>
            <input
              type="radio"
              name="categories"
              id={ele}
              value={ele}
            />
            {ele}
          </label>
        ))}

      </div>
    </section>
  );
}

export default CategoryFilter;
