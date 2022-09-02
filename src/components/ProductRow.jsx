function ProductRow({ name, price, inStock }) {

  return (
    <tr>
      {inStock ? (
        <td>{name}</td>
      ) : (
        <td className="text-danger">{name}</td>
      )}
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
