
import ProductRow from "./ProductRow";


function ProductTable (props){
  
    const productName = props.products.map( (product)=>{
        return( 
            <ProductRow name = {product.name}/>)});
    const productPrice = props.products.map( (product)=>{
        return( 
            <ProductRow price = {product.price}/>)});
    const productStock = props.products.map( (product)=>{
        return( 
            <ProductRow price = {product.inStock}/>)});
   
return (
<div className="tablecss">

  
    <table>
            <tr className="title">
            <th>Name</th>  
            <th>Price</th> 
            </tr>
            <tr>
            {productStock ? <td >{productName}</td>: <td className='redProduct'>{productName}</td>}
              <td>{productPrice}</td>
                
            </tr>

    </table>  

      
</div>  
);


}

export default ProductTable;