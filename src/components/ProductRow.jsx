function ProductRow({ price,   inStock,  name, id}) {
return (
    <tr key={id} className="ProductRow">
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{price}</p>
      </td>
    </tr>
  );
}

export default ProductRow; 