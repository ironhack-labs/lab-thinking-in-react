import ProductRow from "./ProductRow";

function ProductTable(props) {
    return (
    
<table>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Category</th>
    </tr>
{props.products.map((productIndividual)=>{
  return(
      <ProductRow key={productIndividual.id} products={productIndividual}/>
  )
})}
    </table>
      );
    }
    export default ProductTable;