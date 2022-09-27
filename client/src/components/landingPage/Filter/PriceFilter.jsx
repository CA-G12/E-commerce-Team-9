/* eslint-disable react/prop-types */
function PriceFilter({ ascending, descending }) {
  return (
    <section className="price">
      <h4>Price</h4>
      <div className="range">
        <button type="button" onClick={ascending}>Highest</button>
        <button type="button" onClick={descending}>Lowest</button>
      </div>
    </section>
  );
}

export default PriceFilter;
