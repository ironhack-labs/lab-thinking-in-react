import React from 'react';

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

function ProductRow(props) {

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductRow;