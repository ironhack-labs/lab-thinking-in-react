import ProductRow from "../product-row/ProductRow";

function ProductTable({searchTerm}){
  console.log(searchTerm)
    return (
        <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Price</th>
     
    </tr>
  </thead>
  <tbody>
    {searchTerm.map((product)=>{

        return(
        <ProductRow key={product.id} {...product}/>
        )

    })}
    
  </tbody>
</table>
    )
}
export default ProductTable;