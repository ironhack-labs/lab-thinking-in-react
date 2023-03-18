const ProductRow = ({ product }) => {
  const tdStyles = {
    color: 'red',
  };

  return (
    <tr>
      <td style={!product.inStock ? tdStyles : undefined}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
