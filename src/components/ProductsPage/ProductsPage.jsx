// src/components/ProductsPage.js
import { Container } from "react-bootstrap"
import { useState } from 'react';
import jsonData from "../../data.json";
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

const ProductsPage = () => {

    const [products, setProducts] = useState(jsonData);
    const [productsBackup, setProductsBackup] = useState(jsonData);

    const filterProductsByName = query => {
        const filteredProducts = productsBackup.filter(elm => elm.name.includes(query))
        setProducts(filteredProducts)
    }


    return (
        <>
            <Container>
                <SearchBar filterProductsByName={filterProductsByName} products={products} />
                <ProductTable products={products} />
            </Container>

        </>
    )
}



export default ProductsPage