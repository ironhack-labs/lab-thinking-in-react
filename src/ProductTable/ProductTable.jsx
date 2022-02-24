import { useState } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import jsonData from './../data.json'



function ProductTable() {

    const [ products, setProducts ] = useState(jsonData)
    
    return (
        <div>
            <p>Name     Price</p>
            {
                products.map(product => {
                
                    return (product.inStock)  ? <ProductRow key={product.id} {...product} /> : 
                    <ProductRow className="red" key={product.id} {...product} />
                })
            }
        </div>
    )
}

export default ProductTable