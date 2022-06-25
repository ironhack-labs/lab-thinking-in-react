const ProductRow = ({ price, inStock, name, id }) => {


  return (
    <tr key={id}>
      <td
        style={
          inStock ? null : { color: `red` }
        }
      >{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;