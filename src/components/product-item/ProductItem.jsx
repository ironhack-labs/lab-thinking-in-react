function ProductItem({ name, inStock, price}) {
  return(
    <tr>
      <td className={!inStock ? "text-danger" : ""}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductItem