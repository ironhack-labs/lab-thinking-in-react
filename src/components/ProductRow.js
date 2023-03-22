const ProductRow = ({ product }) => {
  const productStock = {
    color: 'red',
  };

  return (
    <tr>
      <td style={!product.inStock ? productStock : undefined}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;