import ProductRow from './ProductRow'

import React from 'react'

function ProductTable(props) {
    return (
        <div>
            <table className='tableProducts'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product) =>(
                        <productRow key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable