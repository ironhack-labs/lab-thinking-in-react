const ProductRow = ({ price, inStock, name }) => {
   
return(
    <tbody>
    <tr>
    <td style={{ color: inStock ? '' : 'red' }}>{name}</td>
    <td>{price}</td>
    </tr>
  </tbody>
)
}
export default ProductRow;