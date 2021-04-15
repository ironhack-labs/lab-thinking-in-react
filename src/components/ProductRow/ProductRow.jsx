import React, { Fragment } from 'react';

function ProductRow({ name, price, stocked }) {
    if (stocked) {
        
    }
    return (
        <Fragment>
            {
                stocked
                    ? (<tr className="ProductRow">
                        <th scope="row">{name}</th>
                        <td>{price}</td>
                    </tr>)
                    : (<tr className="ProductRow" style={{color: "red"}}>
                        <th scope="row">{name}</th>
                        <td>{price}</td>
                    </tr>)
            }     
        </Fragment>
    );
}

export default ProductRow;