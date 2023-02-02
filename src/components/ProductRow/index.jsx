import {React, useState} from "react";
import jsonData from './../../data.json'

function ProductRow(props) {
    return (
        <ul>
            {jsonData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default ProductRow;