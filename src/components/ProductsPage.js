import { useState } from 'react';
import jsonData from "../data.json";
import ProductTable from './ProductTable';
import Search from './Search';

function ProductsPage(){
    const [products, setProducts] = useState(jsonData);
    const [query, setQuery] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <h1>IronStore</h1>
            <Search setQuery={setQuery} setChecked={setChecked} />
            <ProductTable products={products} query={query} checked={checked}/>
        </div>
    )
}

export default ProductsPage;