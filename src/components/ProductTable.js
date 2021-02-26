import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    return (
        <div>
            <ProductRow articulos={props.articulos} />
        </div>
    )
}
