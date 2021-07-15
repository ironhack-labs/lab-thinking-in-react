import React from 'react'
import ProductRow from './ProductRow'



const ProductTable = (props) => {

    const products = props.products

    return (

        <>
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {products.map(elm => <ProductRow key={elm.id} {...elm} />)}
                </table>

            </div>
        </>
    )

}

export default ProductTable