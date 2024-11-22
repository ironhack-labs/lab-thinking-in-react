function ProductRow({ name, price, inStock, category }) {
  const rowStyle = {
    color: inStock ? "black" : "red",
  };

  return (
    <tr>
      <td style={rowStyle}>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
    </tr>
  );
}

export default ProductRow;
