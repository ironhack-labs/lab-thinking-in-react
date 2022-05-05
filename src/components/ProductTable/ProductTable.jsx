import { useState } from 'react';
import ProductRow from '../ProductRow/ProductRow'
import './ProductTable.css'


function ProductsTable({ products }) {

    const [productsValue, setProductsValue] = useState(products);


    return (
        < table >
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {
                    productsValue.map((elm) => {

                        return <ProductRow name={elm.name} id={elm.id} price={elm.price} inStock={elm.inStock} />
                    })
                }
            </tbody>
        </table >
    )
}

export default ProductsTable