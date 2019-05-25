import React from "react"
import ProductRow from "./ProductRow"

const ProductTable = (props) => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {
                props.products.map((product,idx) => <ProductRow key={idx} name={product.name} price={product.price} stocked={product.stocked}/>)
            }
            </tbody>
        </table>
    )
}

export default ProductTable 