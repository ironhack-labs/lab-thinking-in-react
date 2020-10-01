import React from 'react'


const List  = props => {
    return (
        <>
            <div> {props.products.map(elm => <h4 key={elm.id}>{elm.name} {elm.price}</h4>)}</div>
        </>

    )
}

export default List