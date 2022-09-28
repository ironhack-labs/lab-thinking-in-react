const ProductRow = (props) => {
  const product = props.product;
  return (
    <tr>
      {product.inStock ? (
        <td>{product.name}</td>
      ) : (
        <td style={{ color: 'red' }}>{product.name}</td>
      )}
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
