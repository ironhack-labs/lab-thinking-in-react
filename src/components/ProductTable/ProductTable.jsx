import { useState, useEffect } from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css'

function ProductsTable({ products }) {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        setProductsData(products)
    })

    return (
        <div className='centerTable'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>

                    {products.map((product) => {
                        return (
                            <tr className='rowStyle'>
                                <ProductRow  {...product} />
                            </tr>
                        )
                    })}

                </thead>
            </table>
        </div>
    )
}

export default ProductsTable