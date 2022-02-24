import React from 'react'
import { useState } from 'react'
import JsonData from '../data.json';
import ProductRow from './ProductRow';


function ProductTable() {


    const arrCopy = [...JsonData]

    const [sonData, setSonData] = useState(arrCopy)
    console.log(sonData)

    return (
        <div><table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {sonData?.map(elm => {
                    return <ProductRow product={elm}></ProductRow>
                })}
            </tbody>
        </table></div>
    )
}
export default ProductTable