import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td><strong>Name</strong></td>                    
                        <td><strong>Price</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(item => <ProductRow key={item.id} item={item} />)}
                </tbody>
            </table>
        </div>
    )

}

export default ProductTable;
