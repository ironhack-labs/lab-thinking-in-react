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
    const checkStock = function Stock(){
        if(productStock === false){
            return (<td>{productName}</td>);
        }
        else{
            return (<td className="stock">{productName}</td>)
        }
    }
    


return (
<div className="tablecss">
    <table>
            <tr className="title">
            <th>Name</th>  
            <th>Price</th> 
            </tr>
            <tr>
                <td>{checkStock()}</td>
                <td>{productPrice}</td>
            </tr>

    </table>  

      
</div>  
);


}

export default ProductTable;