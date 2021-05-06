import React from 'react';
import ProductRow from './ProductRow'

const ProductTable = ({products}) => {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {products.map(elm => <ProductRow key={elm.id} {...elm} />)}
            </table>
        )
    }

export default ProductTable