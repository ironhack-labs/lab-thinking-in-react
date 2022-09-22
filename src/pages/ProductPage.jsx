import { useState } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import jsonData from '../data.json'
import ProductTable from '../Components/ProductTable/ProductTable';
import CheckBox from '../Components/CheckBox/CheckBox';
import './ProductPage.css';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    products.sort((a, b) => {
        if (a.category < b.category) {
            return -1;
        }
        if (a.category > b.category) {
            return 1;
        }
        return 0;
    });


    return (
        <div>
            <nav className='nav-iron'>
                <h1>IronStore</h1>
                <SearchBar jsonData={jsonData} setProducts={setProducts} />
                <CheckBox jsonData={jsonData} setProducts={setProducts} />
            </nav>
            <ProductTable className='table-iron' products={products} />
        </div>
    )
}

export default ProductsPage;