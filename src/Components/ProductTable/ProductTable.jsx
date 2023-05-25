import { useState } from "react"
import ProductRow from "./../ProductRow/ProductRow"


const ProductTable = ({ products }) => {


    return (

        products.map((elm) => {
            return (
                <ProductRow key={elm.id} {...elm} />
            )
        })

    )

}

export default ProductTable