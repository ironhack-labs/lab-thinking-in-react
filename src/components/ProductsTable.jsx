import React from "react"
import ProductRow from "./ProductRow"

const ProductsTable = (props) => {
    
    const {products} = props

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    { products.map( (product) => {
                        return(
                            <ProductRow product={product} key={product.id} />
                        )
                    }) }    
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable