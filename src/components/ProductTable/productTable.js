import React, { Component } from 'react'
import ProductRow from './productRow'


const ProductTable = (props) => {
    //console.log("props productable", this.state.products)
    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.props.map((elm, idx) => <ProductRow product={elm} key={idx} />)}
                </tbody>
            </table>
        </>
    )
}


export default ProductTable