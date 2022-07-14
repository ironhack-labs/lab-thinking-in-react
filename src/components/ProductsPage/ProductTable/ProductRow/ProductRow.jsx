import { useState } from "react"


const ProductRow = ({ product }) => {

    const [productList, setProductList] = useState(product)

    return (

        productList.map(ele => {
            return (
                <div key={ele.id}>
                    <h1>{ele.name}</h1>
                    <h1>{ele.price}</h1>
                </div>
            )
        })

    )


}

export default ProductRow