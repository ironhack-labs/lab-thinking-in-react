import React from 'react'

export default function Product(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Price: {props.price}</h3>
        </div>
    )
}
