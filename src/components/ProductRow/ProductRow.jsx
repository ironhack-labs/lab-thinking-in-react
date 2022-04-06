const ProductRow = ({ name, price, inStock }) => {
  return (
    <>
      <th scope="row" style={{color: inStock === false ? 'red' : 'black'}}>{name}</th>
      <td>{price}</td>
    </>
  )
}

export default ProductRow;