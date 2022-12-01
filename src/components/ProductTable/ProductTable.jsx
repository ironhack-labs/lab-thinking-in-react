import productData from "../../data.json"
import { useEffect, useState } from "react"
import "./ProductTable.css"


const ProductTable = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        setProducts(productData)

    }, [])

    return (
        <div>
            <h1>Products</h1>
            {
                !productData ? <h1>Loading...</h1>
                    : productData.map(elm => {
                        return (
                            <div key={elm.id} >

                                <p>{elm.name} </p>

                                <p>{elm.price}</p>

                            </div>
                        )
                    })
            }
        </div>

    )
}

export default ProductTable