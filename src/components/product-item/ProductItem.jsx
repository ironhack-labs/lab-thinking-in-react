function ProductItem({ item }) {
  return(
    <tr>
      <td className={!item.inStock ? "text-danger" : ""}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  )
}

export default ProductItem