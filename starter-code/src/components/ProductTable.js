import React from "react";
import ProductRow from "./ProductRow";
import "../App.css";

export default function ProductTable(props) {
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <div className="ProductTableHeader">
                    Name
                </div>
                <div className="ProductTableHeader">
                    Price
                </div>
            </div>
            <div>
                {props.rows.map(row => (
                    <ProductRow key={row.name} name={row.name} price={row.price} stocked={row.stocked} />
                ))}
            </div>
        </div>
    );
}