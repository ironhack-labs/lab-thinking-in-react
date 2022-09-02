import './ProductRow.css'

function ProductRow({category, price, inStock, name, id, i}) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td className={inStock && `product-out-stock`}>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
    </tr>
  )
}


export default ProductRow