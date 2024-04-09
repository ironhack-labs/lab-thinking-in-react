
function ProductRow({ product }) {
  const textColor = product.inStock? 'black' : 'red';

  return (
    <tr>
      <td style={{ color: textColor }}>{product.category}</td>
      <td style={{ color: textColor }}>{product.price}</td>
      <td style={{ color: textColor }}>{product.inStock? 'In Stock' : 'Out of Stock'}</td>
      <td style={{ color: textColor }}>{product.name}</td>
    </tr>
  );
}

export default ProductRow;