export const ProductRow = ({ product }) => {
  return (
    <tr>
      <td className={product.inStock ? '' : 'outOfStock'}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
