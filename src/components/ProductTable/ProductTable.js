import React from 'react'
import ProductRow from '../ProductRow/ProductRow'


export default function ProductTable({ products }) {
    const divStyle = {
        borderBottom: '30px solid #14213d',
    };

    return (
        <>
            <div>
                <div className="columns is-centered">
                    <div className="column is-one-quarter" style={divStyle}><b>Name</b></div>
                    <div className="column is-one-quarter" style={divStyle}><b>Price</b></div>
                </div>
                {products.data.map((product) => {
                    return <ProductRow key={product.id} name={product.name} stocked={product.stocked} price={product.price} />
                })}
            </div>
        </>
    )
}
