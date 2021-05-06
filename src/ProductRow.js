import React from 'react';

export default function ProductRow(props) {

    const items = props.products;
    return (
        <>
            { items.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.price}
                        </td>
                    </tr>
                )
            })}

        </>
    )

}