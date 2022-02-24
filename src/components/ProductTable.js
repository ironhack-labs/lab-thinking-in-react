import ProductRow from "./ProductRow";

function ProductTable (props) {
    
    return(
        <div>
          
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
                <ProductRow 
                productsProp={props.productsProp} 
                searchProp={props.searchProp}
                checkedProp={props.checkedProp}
                /> 
            </tbody>   
                     

            </table>

        </div>    
    )
  }
  
  export default ProductTable;