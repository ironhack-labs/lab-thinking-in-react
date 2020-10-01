import React from 'react'

import ProductRow from './ProductRow'

const ProductTable = props => {

    const filteredProduct = props.data.filter(elm => !elm.stocked ? elm.stocked === props.checked : elm)
    return (

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* {props.data.filter(elm => elm.name.includes(props.state)) */}
                {filteredProduct.map(elm => <ProductRow key={elm.id} {...elm} />)}
            </tbody>
        </table>
    )
}

export default ProductTable