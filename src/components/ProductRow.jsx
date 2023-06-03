function ProductRow(props) {
  const { name, price, inStock } = props;

  if (inStock === false) {
    return (
      <tr>
        <td style={{ color: 'red' }}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
