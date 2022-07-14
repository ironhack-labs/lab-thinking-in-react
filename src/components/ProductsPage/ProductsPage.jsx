import { useState } from 'react';
import jsonData from '../../data.json';

import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    const [productsCopy, setProductsCopy] = useState(jsonData)

    const filterProduct = letter => {

        if (letter === '') {
            setProducts(productsCopy)
        }
        else {
            const filteredProducts = productsCopy.filter(elm => elm.name.startsWith(letter))
            setProductsCopy(filteredProducts)
        }
    }
    console.log('FILTRO', productsCopy)

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProduct={filterProduct} />
            <ProductTable products={productsCopy} filterProduct={filterProduct} />

        </div>
    )
}

export default ProductsPage