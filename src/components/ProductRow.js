function ProductRow({ product }) {
  const { name, price, inStock } = product;
  return (
    <tr>
      <td style={{ color: inStock ? '#000' : 'tomato' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
