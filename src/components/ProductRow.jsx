import React from 'react'
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

export const ProductRow = ({ product }) => {
    const { isDarkMode } = useContext(ThemeContext);
    const name = product.inStock ? product.name :
        <span style={{ color: '#e74c3c' }}>
            {product.name}
        </span>;
    return (
        <tbody>
            <tr className='border-bottom' style={{ borderBottom: isDarkMode ? "1px solid white" : "1px solid #283848" }}>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        </tbody>

    )
};
