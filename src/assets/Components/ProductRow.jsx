function ProductRow({ product }) {
  let color = product.inStock ? "blue" : "red";
  return (
    <tr style={{ color: color }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
export default ProductRow;
