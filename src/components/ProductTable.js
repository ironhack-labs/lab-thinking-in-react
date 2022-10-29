import ProductRow from "./ProductRow";
function ProductTable({product}){
  

    return(
    
            <table style={{marginLeft:'auto', marginRight:'auto'}}>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>

                    </tr>
                   
                </thead>
                    <tbody>
                    <ProductRow products ={product} />
                    </tbody>
            </table>
    
    );
}

export default ProductTable;