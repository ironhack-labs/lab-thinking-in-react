function ProductRow({ product }) {
    return (
      <article style={{ color: product.inStock ? "black" : "red" }}>
        <p>{product.name} - {product.price}</p>
      </article>
    );
  }
  
  export default ProductRow;
  