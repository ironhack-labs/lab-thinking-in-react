function ProductRow(props) {
  const { name, price, inStock } = props;

  return (
    <tr>
      <td
        style={{
          color: inStock ? 'black' : 'red',
        }}
      >
        {name}
      </td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
