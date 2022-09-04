function ProductRow({ name, price, inStock }) {
  return (
    <tr>
      <td style={{ color: inStock ? "black" : "red"}}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
