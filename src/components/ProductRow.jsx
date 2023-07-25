const ProductRow = ({ product, searchTerm, showOnStock }) => {
  const productName = String(product.name).toLowerCase()
  const searchName = String(searchTerm).toLowerCase()

  const toRender = (
    <tr className="ProductRow">
      <td className={product.inStock ? 'inStock' : 'outStock'}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  )

  if (productName.startsWith(searchName) && !showOnStock) {
    return (
      toRender
    )
  } else if (productName.startsWith(searchName) && showOnStock && product.inStock) { 
    return (
      toRender
    )
  }
}

export default ProductRow