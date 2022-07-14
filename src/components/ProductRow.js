import { useState } from 'react';
import jsonData from '../data.json';

function ProductRow(props) {
    function changeRed(props){
        if (props.tableRow.inStock === false) {
            return  'red'
        }
    }

    return (
        <tr>
            <td style={{color: changeRed(props)}}>{props.tableRow.name}</td>
            <td>{props.tableRow.price}</td>

        </tr>

    )
}

export default ProductRow;