import { useState } from 'react';
import jsonData from './../data.json';
import Checkbox from './Checkbox';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState('');
    const [checked, setCheck] = useState(false);

    const handleSearch = (userInput) => {
        setSearch(userInput.target.value);
    };

    const handleChange = () => {
        console.log('The checkbox was toggled');
        setCheck(!checked);

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
            <SearchBar handleSearch={handleSearch} search={search} checked={checked} />
            <Checkbox handleChange={handleChange} checked={checked} />
            <ProductTable products={products} search={search} />

        </div>
    );
}

export default ProductsPage;