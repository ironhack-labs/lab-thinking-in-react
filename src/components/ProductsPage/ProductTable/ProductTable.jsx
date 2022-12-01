import { useState } from 'react'
import ProductRow from './ProductRow/ProductRow'

function ProductTable() {

    const [ProductList, setProductList] = useState([])

    return <div>
        <ProductRow />
    </div>
}

export default ProductTable