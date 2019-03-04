import React from 'react';

const Row = ({name,price,avaible,red={color:"red"}}) => (
    <tr >
      {
        avaible?
        <td>{name}</td>:
        <td style={red} >{name}</td>
      }
      <td>{price}</td>
    </tr>

);

export default Row;