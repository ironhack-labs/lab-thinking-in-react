import { useState } from 'react';
import jsonData from './../data.json';


export default function ProductRow(props) {
    const [rows, setRows] = useState(jsonData);

    return(          
        <tr key={props.product.id}>                            
            <td style={!props.product.inStock ? {color: 'red'} : {color: 'black'}}>{props.product.name}</td> 
            <td>{props.product.price}</td>
        </tr>         
    )
}