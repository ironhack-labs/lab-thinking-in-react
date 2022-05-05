import { useEffect, useState } from 'react';
import jsonData from './../../data.json';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
function ProductsPage() {
    const [productsAll, setProducts] = useState([]);

    useEffect(()=>{
        loadProducts()
    },[])

    const loadProducts =()=>{
        const productsJson = jsonData.map((elem)=>elem)
        setProducts(productsJson)

    }

    return (
        <div>
            <h1>IronStore</h1>
            <ProductTable products={productsAll}>
            </ProductTable>
        </div>
    )
}

export default ProductsPage