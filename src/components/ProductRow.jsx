function ProductRow({ product }) {
  const style = {
    color: product.inStock ? "inherit" : "red",
  };

  return (
    <tr style={style}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
