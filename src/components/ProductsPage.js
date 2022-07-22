import { useState } from "react";
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable/ProductTable';

function ProductsPage (){
    const [products, setProducts] = useState(jsonData);
    const [filterProducts, setFilterProducts] = useState(jsonData);
    const [search, setSearch] = useState('');

    return(
        <div className='productsPage'>
            <h1>IronStore</h1>
            <SearchBar search={search} setSearch={setSearch} setFilterProducts={setFilterProducts} products={products}/>
            <ProductTable products={filterProducts}/>
        </div>
    )
}
export default ProductsPage;