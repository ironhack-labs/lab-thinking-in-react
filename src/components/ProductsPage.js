
import SearchBar from './SearchBar'
import ProductsTable from './ProductsTable'
import produtos from './../data.json';
import { useState } from 'react';

function ProductsPage(){
    const [produto, setProdutos] = useState(produtos);
    

    return (
        <div>
            <SearchBar/>
            <ProductsTable produtos={produtos}/>
        </div>
        
    )
}
export default ProductsPage;