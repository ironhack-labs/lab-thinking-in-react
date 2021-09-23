import React from "react"
import ProductRow from "../ProductRow/ProductRow"

export default function ProductTable () {

    return (
        <table>
            <tr>
            <th>
                <h2> Name </h2>
            </th>
                <th>
                    <h2> Price </h2>
                </th>
            </tr>

          
                <ProductRow/>
            

        </table>
    )
}