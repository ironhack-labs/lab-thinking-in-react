
import React from 'react';

const TableLine = (props) => {
 return (
    <tr key={props.index}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
 )
}

export default TableLine