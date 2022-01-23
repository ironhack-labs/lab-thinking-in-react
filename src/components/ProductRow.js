const ProductRow = ({ category, price, inStock, name, id }) => {
  return (
    <tr>
      <td style={{ color: inStock ? '' : 'red' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
