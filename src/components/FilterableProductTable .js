import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function FilterableProductTable (props) {
    const  [prod,setProd] = useState(props.products);
    return (
        <div>
            <SearchBar products={prod} setproducts={setProd} />
            <ProductTable products={prod} setproducts={setProd}/>
        </div>
    )
}
