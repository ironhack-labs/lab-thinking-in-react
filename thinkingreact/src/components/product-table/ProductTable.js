import React from 'react'
import ProductRow from './../product-row/ProductRow'
import data from './../../data.json'

const ProductTable = ({ data }) => {


    return (
        <div className="table">
            <table>
                <tbody>
                <tr>
                   <th>Name</th>
                   <th>Price</th>
                </tr>
                <tr>
                 {data.map(elm => <ProductRow key={elm.id} name={elm.name} price={elm.price}/>)
                }
                    </tr>
                </tbody>    
             </table>  
        </div>
    )
}

export default ProductTable