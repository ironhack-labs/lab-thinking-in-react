function ProductRow({ price, name, id, inStock }) {
  return (
    <tr key={id} className="ProductRow">
      <td>
        {inStock ? <p>{name}</p> : <p className="out-of-stock">{name}</p>}
      </td>
      <td>
        <p>{price}</p>
      </td>
    </tr>
  );
}

export default ProductRow;
