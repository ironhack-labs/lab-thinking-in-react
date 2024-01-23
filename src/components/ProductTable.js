import ProductRow from "./ProductRow"

function ProductTable(props) {
  return (
    <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
         </tr>
         <tbody>
      {props.products.map((product)=>{
        return(
          <ProductRow key={product.id} product={product} /> 
        )
      })}

      
      </tbody>
    </table>
    </div>
  )
}

export default ProductTable
