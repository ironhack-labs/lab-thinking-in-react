import React from 'react'

const ProductRow = ({name, price}) =>{
    return(
        <div>
            <div className="columns">
                <div className="column is-3 is-offset-3">
                    {name}
                </div>
                <div className="column is-3">
                    {price}
                </div>
            </div>
        </div>
    )
}

export default ProductRow