

function ProductRow({ product }) {
console.log(product);
  const productStyle = {
    color: product.inStock ? "black" : "red",
  };

  return (
    <tr className="product-row" flex flex>
      <td style={productStyle}>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.inStock ? "Yes" : "No"}</td>
      <td>{product.category}</td>
    </tr>
  );
}

export default ProductRow;
