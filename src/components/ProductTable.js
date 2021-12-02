import React from "react"
import ProductRow from "./ProductRow"
import styled from "styled-components"

const Table = styled.table`
    width: 100%;
    text-align: center;
    border-collapse: collapse;

    td {
        padding: 12px 0;
        border-bottom: 1px solid lightgray;
        width: 50%;
    }
`

const Thead = styled.thead`
    background-color: lightblue;
    font-weight: bold;
`

export default function ProductTable(props) {
    return (
        <Table>
            <Thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </Thead>

            <tbody>
                {props.products.map((product, i) => (
                    <ProductRow products={product} key={i} />
                ))}
            </tbody>
        </Table>
    )
}
