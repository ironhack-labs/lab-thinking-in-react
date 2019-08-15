import React from 'react'

const row = props => {
    return (
        <article className = "productRow">
        <div className = "row">
        <div className = "col-6">{props.name}</div>
        <div className = "col-6">{props.price}</div>
        </div>
        </article>
    )
}

export default row