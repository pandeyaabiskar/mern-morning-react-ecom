function ProductCard() {
    return (
        <section className="products">
        <div className="product-card">
          <a href="/details/1">
            <div className="product-image">
              <img src="image" />
            </div>
            <div className="product-info">
              <h5>Clothes</h5>
              <h6>$100</h6>
            </div>
          </a>
        </div>
      </section>
    )
}

export default ProductCard