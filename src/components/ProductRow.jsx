const ProductsRow = (props) => {
  const { price, name, inStock } = props;
  const outOfStock = inStock ? '' : 'out-of-stock';
  return (
    <tr>
      <td className={outOfStock}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductsRow;
