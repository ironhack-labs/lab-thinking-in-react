import React from 'react'


const ProductsRow = ({ name, price }) => {

    return (
        <article>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p>{name}</p>
                    </div>
                    <div className="col-6">
                        <p>{price}</p>
                    </div>
                </div>
                <hr />
            </div>

        </article>
    )


}

export default ProductsRow