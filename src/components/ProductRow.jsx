const ProductRow = ({ name, price, inStock }) => {
  const style = { color: inStock ? "black" : "red" };

  return (
    <tr>
      <td style={inStock ? {} : style}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
