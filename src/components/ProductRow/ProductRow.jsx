import { useState } from 'react';


function ProductRow({ name, price, inStock }) {
    const [ProductRow, setProductRow] = useState({ name, price, inStock })

    return (
        <>
            <tr>
                <td>
                    {ProductRow.name}
                </td>
                <td>
                    {ProductRow.price}
                </td>
            </tr>

        </>
    )
}

export default ProductRow