import { useEffect, useState } from 'react';
import jsonData from './../../../data.json';
import './ProductRow.css'

function ProductRow() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(jsonData)
    }, [])

    const [Stock, setStock] = useState(true)
    const handleStock = () => setStock
    return (
        <div >
            {
                products.map((products) => {
                    return (
                        <div key={products.id} className="products">
                            <p>{products.name} {products.price}</p>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default ProductRow