function PriceFilter() {
  return (
    <section className="price">
      <h4>Price</h4>
      <div className="range">
        <label htmlFor="highest">
          Highest price
          <br />
          <input type="range" name="" id="highest" />
        </label>
        <label htmlFor="lowest">
          Lowest price
          <br />
          <input type="range" name="" id="lowest" />
        </label>
      </div>
    </section>
  );
}

export default PriceFilter;
