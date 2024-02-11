export const ProductRow = (props) => {
  const { product } = props;
  return (
    <tr className="row">
      <td>{product.name}</td>
      <td>{product.price}€</td>
    </tr>
  );
};
