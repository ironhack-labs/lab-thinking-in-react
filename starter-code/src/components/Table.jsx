import React from "react";
import "./../styles/Table.css";
import Product from "./Product";

export default function Table (props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <Product data={props.data.map((p, i) => p)}/>
        </table>
    )
}