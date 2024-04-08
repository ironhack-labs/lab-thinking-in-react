import './ProductRow.css';

function ProductRow( { product }) {
  return (
      <tr>
        <td style={{ color: product.inStock ? "" : "red"}}>
          {product.name}
        </td>
        <td>
          {product.price}
        </td>
      </tr>
  )


}

ProductRow.defaultProps = {
  product: {}
}

export default ProductRow;