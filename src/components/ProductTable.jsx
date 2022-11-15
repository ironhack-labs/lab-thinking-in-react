import React from 'react'
import { ProductRow } from '../components/ProductRow';
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

function ProductTable({ products, filterText }) {

    const { isDarkMode } = useContext(ThemeContext);
    const rows = [];

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }

        rows.push(
            <ProductRow
                product={product}
                key={product.id} />
        );

    });

    return (
        <>
            <h2 style={{ color: isDarkMode ? "white" : "black" }}>ProductTable</h2>
            <table style={{ color: isDarkMode ? "white" : "#283848" }}>
                <thead>
                    <tr className='border-bottom' style={{ borderBottom: isDarkMode ? "1px solid white" : "1px solid #283848" }}>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                {rows}
            </table>
        </>
    )
}

export default ProductTable;
