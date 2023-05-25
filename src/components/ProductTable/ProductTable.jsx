import { useState } from "react";
import React from 'react'

function ProductTable({ products }) {
    const [value, setValue] = useState([])
    return (
        {
            value.map((othervalue) => {
                return (<div key={othervalue.id} className='Table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{price}</td>
                            </tr>

                            <tr>
                                <td>nombre producto 2</td>
                                <td>precio producto 2</td>
                            </tr>

                            <tr>
                                <td>nombre producto 3</td>
                                <td>precio producto 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )

            }
            )


        }
    )
}

export default ProductTable;