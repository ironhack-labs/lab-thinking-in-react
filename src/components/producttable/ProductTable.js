import React, { Component } from 'react'

import ProductsRow from '../productrow/ProductRow'
import products from '../data.json'



const ProductTable = props => {


    return (

        <>
            <section>

                <header>
                    <h4>
                        NAME
                        </h4>
                    <h4>
                        PRICE
                        </h4>
                </header>
                <div>
                    <h4>Search</h4>
                </div>
                <div>
                    {props.products && props.products.map(elm => <ProductsRow key={elm.id} {...elm} />)}
                </div>
            </section>

        </>
    )

}
export default ProductTable