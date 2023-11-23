import React from "react"
import "./ProductTable.css"
import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ products }) => {



    return (
        <div className="tableProducts">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductRow key={product.id} {...product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}



export default ProductTable