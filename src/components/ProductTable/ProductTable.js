import React from 'react' 
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = (props) => {

    return (

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map((product) => {
                            return <ProductRow product={product} key={product.id} /> 
                        })}
                    </tbody>
                </table>
            </div>


    )

}

export default ProductTable
