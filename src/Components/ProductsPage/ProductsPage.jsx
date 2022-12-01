import { useEffect, useState } from 'react';
import jsonData from './../../data.json';

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(jsonData)
    }, [])


    return (
        <div>
            <h1>IronStore</h1>
            {/* {products.map((products) => {
                return (
                    <div key={products.id} className="products">
                        <h3>{products.name}</h3>
                    </div>
                )
            })} */}
        </div>
    )
}

export default ProductsPage