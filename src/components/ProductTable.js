import { useState } from "react/cjs/react.production.min";
import ProductRow from "./ProductRow";
import SearchBar from "./SearchBar";

function ProductTable (props) {

//    console.log(props)
    return (
        
        <div>

            <ProductRow products={props.products} search={props.search} check={props.check}/>
       
        </div>
        )
        
   

}

export default ProductTable