import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = () => {
        return (
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                    <tbody>
                        <ProductRow />
                    </tbody>
            </table>
        )
    
}

export default ProductTable