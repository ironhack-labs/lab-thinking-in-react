import ProductRow from "../ProductRow/ProductRow"

import { useState } from "react"


const ProductTable = ({ products }) => {

    const [productsData, setProductsData] = useState(products)


    return (
        <table>

            <thead>

                <td>

                    <th>
                        Name

                    </th>
                    <th>
                        Price

                    </th>
                </td>
            </thead>
            <tbody>
                {
                    productsData ?
                        productsData.map(((elm, i) => {

                            return (

                                <ProductRow key={i} {...elm} />

                            )
                        }))
                        :
                        <h1>Cargando</h1>
                }


            </tbody>


        </table>
    )
}

export default ProductTable