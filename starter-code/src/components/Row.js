import React from 'react';

const Row = ({name,price,avaible,blue={color:"blue"}}) => (
    <tr >
      {
        avaible?
        <td>{name}</td>:
        <td style={blue} >{name}</td>
      }
      <td>{price}</td>
    </tr>

);

export default Row;