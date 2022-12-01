import jsonData from './../../data.json';
import { useState, useEffect } from 'react';
import './ProductRow.css'

const ProductRow = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(jsonData)
    }, [])

    return (
        <div>
            {products.map((product) => {
                return (
                    <div key={product.id} className="product">
                        <p>{product.name}</p>
                        <p>{product.price}</p>

                    </div>
                )
            })}


        </div>
    )
}

export default ProductRow