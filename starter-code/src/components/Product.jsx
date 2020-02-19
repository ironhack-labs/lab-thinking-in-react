import React from "react";
import "./../styles/Product.css";

export default function Product(props) {
    return(
        <tbody>
            {props.data.map((p, i) => (
                <tr key={i} className={"instock-"+p.stocked}>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                </tr>
            ))}
        </tbody>
    )
}