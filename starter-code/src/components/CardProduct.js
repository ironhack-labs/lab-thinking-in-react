import React from 'react';


const CardProduct = (props) => {

    return(
        <article className="container">
            <div className="row">
            <div className="col">
            <p>{props.name}</p>
            </div>
            <div className="col">
            <p>{props.price}</p>
            </div>
            </div>
        </article>
    )
}

export default CardProduct
