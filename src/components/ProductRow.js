import React from "react";

function ProductRow(props) {

    const { name, price, inStock, category} = props.product;

    return(
                        <tr style={{ height: '40px', borderBottom: '1px solid #C4C4C4', display: 'flex'}}>
                            {inStock
                               ? <td style={{ textAlign: 'center', flex: '1', fontWeight: '500'}}>{name}</td>
                               : <td style={{ textAlign: 'center', flex: '1', color: 'red', fontWeight: '500'}}>{name}</td>
                            }
                            <td style={{ textAlign: 'center', flex: '1'}}>{price}</td>
                        </tr>
    );
}

export default ProductRow;