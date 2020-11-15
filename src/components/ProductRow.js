import React from 'react'


function ProductRow(props){

    const {name,price,stocked} = props.children;

    return (
      <tr className={stocked ? 'table-light' : 'table-danger'}>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );

}

export default ProductRow;