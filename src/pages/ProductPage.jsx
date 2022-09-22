import { useState } from 'react';
import ProductTable from '../components/ProductTable';
import SearchBar from '../components/SearchBar';
import jsonData from '../data.json';

const ProductPage = () => {
    const [products, setProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={jsonData} setProducts={setProducts} />
            <ProductTable products={products} />
        </div>
    )
}

export default ProductPage;

