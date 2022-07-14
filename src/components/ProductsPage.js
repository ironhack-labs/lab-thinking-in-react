import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [que, setQue] = useState('')
    const [inStock, setInStock] = useState(false)
 

    return (
        <div>
            <div>
                <SearchBar setQue={setQue} setInStock={setInStock}/>
            </div>

            <div>
                <ProductTable que={que} products={products} inStock={inStock} />
            </div>
        </div>
    )
}

export default ProductsPage;