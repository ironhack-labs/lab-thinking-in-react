import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState('');

    const handleSearch = (userInput) => {
        setSearch(userInput.target.value);
    };


    // const handleSearch = (userInput) => {
    //     if (!userInput) {
    //         setProducts(jsonData)
    //     } else {
    //         const filteredProducts = jsonData.filter((oneProduct) => {
    //             return oneProduct.name.toLowerCase().includes(userInput.toLowerCase)
    //         })
    //         setProducts(filteredProducts);
    //     }
    // }


    return (
        <div className="product-page-container">
            <h1>IronStore</h1>
            <SearchBar handleSearch={handleSearch} search={search} />
            <ProductTable products={products} search={search} />
        </div>
    );
}

export default ProductsPage;