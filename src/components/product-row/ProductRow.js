


function ProductRow({ name, inStock, price, id }) {

  const colorName = inStock ? name : <span style={{color: 'red'}}> {name} </span>;
  
  return (
    <tr key={id}>
      <td>{colorName}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
