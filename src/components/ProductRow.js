import React from "react";

const ProductRow = (data) => {
    return (
        <tr>
            <td>{data.category}</td>
            <td>{data.price}</td>
            <td>{data.inStock}</td>
            <td>{data.id}</td>
        </tr>
    );
};

export default ProductRow;