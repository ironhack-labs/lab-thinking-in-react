import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ product}) =>{

    
    return (<div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3>Name</h3>
            </div>

            <div className="col-md-6">
                <h3>Price</h3>
            </div>
            <hr />
        

            {product.map((elm, idx) => {



                return <ProductRow key={idx} {...elm}  />


            })


            }
        </div>
    </div>)
}

export default ProductTable