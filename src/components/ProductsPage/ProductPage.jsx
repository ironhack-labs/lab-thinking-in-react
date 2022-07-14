import { Container } from 'react-bootstrap'
import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    const filterProducts = (letter) => {

        const filteredProducts = products.filter(elm => elm.name.startsWith(letter))
        setProducts(filteredProducts)

    }

    return (
        <Container>
            <h1>IronStore</h1>
            <hr />
            <SearchBar filterProducts={filterProducts} />
            <ProductTable products={products} />
        </Container>
    )
}

export default ProductsPage