import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1 className='title'>IronStore</h1>
            <SearchBar setProducts={setProducts} products={products} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductsPage