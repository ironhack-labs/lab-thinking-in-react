function ProductsRow (props) {
  const {products} = props
       return(
        <tr>
          <td className={products.inStock ? "" : "outOfStock"} >{products.name}</td>
          <td>{products.price}</td>
          <td>{products.category}</td>
        </tr>
    )
  }
  export default ProductsRow;