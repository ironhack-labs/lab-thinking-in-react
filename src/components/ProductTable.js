import ProductRow from './ProductRow'
import React from 'react'


export default function ProductTable(props) {


    return (
        <div className="products-table">

            <div className="products-header">
                <h4>Name</h4>
                <h4>Price</h4>
            </div>

            <div>
                {
                    props.products.map(elm => <ProductRow key={elm.id} {...elm} />)

                }
            </div>

        </div>
    )
}
