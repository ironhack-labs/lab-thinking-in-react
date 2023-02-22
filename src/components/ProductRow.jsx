import React from "react";

function ProductRow({ newProduct }) {


    return (
        <div>
            <table>
                <tbody>
                    <tr key={newProduct.name} className={newProduct.inStock ? 'in-stock' : 'out-of-stock'}>
                        <td>{newProduct.name}</td>
                        <td>{newProduct.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductRow;