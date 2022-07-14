import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow';

function ProductTable(props) {

    //不要再寫一個function給確定庫存，直接寫在搜尋function裡面
    const filtered = props.products.filter(product => {
        if (!product.inStock && props.inStock) {
            return false
        }
        return product.name.toLowerCase().includes(props.que.toLowerCase())
    });


    const tableRows = filtered
        .map(function (tableRow) {
            return <ProductRow tableRow={tableRow} />
        })

    return (
        <table>
            <thead>
                <tr >
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
                {/* <ProductRow /> */}
            </tbody>
        </table>
    )
}
export default ProductTable;