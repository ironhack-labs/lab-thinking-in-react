import ProductRow from "../ProductRow/ProductRow"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

const ProductTable = ({ productsData }) => {

    return (
        <Table>
            <thead className="head">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {
                productsData?.map((elm, idx) => {
                    return <ProductRow key={idx} product={elm} />

                })
            }

        </Table>

    )
}

export default ProductTable