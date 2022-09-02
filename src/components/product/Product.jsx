
function Product ({ price, inStock, name}){
  return (
    <>
      <tr>
        <td style={{ color: !inStock ? 'red' : 'black'}}>{ name }</td>
        <td>{ price }</td>
      </tr>
    </>
  )
}
export default Product;