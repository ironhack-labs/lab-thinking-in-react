import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable.jsx';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            
            <SearchBar 
                originalProducts={jsonData}
                shownProducts={products}
                setProducts={(queryResult)=>{setProducts(queryResult)}}
                />
            <ProductTable products={products}/>

        </div>
    )
}

export default ProductsPage;
