import React from 'react'

function ProductRow(props) {

    return ( 
        <>
            {props.products.map(product => { 

                return (
                    <div key={product.id}>
                        <span style={product.stocked ? {color: 'black'} : {color: 'red'}}>{product.name}</span>
                        <span>{product.price}</span>
                    </div>
                )
            })}
        </>
    )
}

export default ProductRow

