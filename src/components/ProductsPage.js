
import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData);

    return (
        <>

            <h1>Products</h1>
            <hr />
            <SearchBar />
            <ProductTable products={products} />
        </>
    )
}
export default ProductsPage
