import React, { useState } from 'react'
import datajson from '../data.json'
import ProductTable from './ProductTable'

function ProductsPage() {

    const [products, setProducts] = useState(datajson)

    return (
        <div>
            <h1>IronStore</h1>
            <ProductTable products={products} />
        </div>
    );
}

export default ProductsPage

