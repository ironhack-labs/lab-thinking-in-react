import React from 'react';
import SearchBar from "../SearchBar/SearchBar"

const  FilterableProductTable = ({products}) => {
    return ( 
        
        <div>
            <SearchBar/>
            {products.map((product)=><li key={product.id}>{product.category}</li>)}
        </div>
     );
}

function List({category,price,stocked,name,id}) {
    
}
 
export default FilterableProductTable;