const ProductRow = ({ product }) => {
  return (
    <tr>
      <td>{product.category}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
