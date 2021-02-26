import React from "react"
import ProductRow from "./ProductRow";
export default function ProductTable() {
    return (
        <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
                <ProductRow />
        </table>
        </div>
    )
}