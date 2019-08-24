import React from 'react';


const Row = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.price}</td>
  </tr>
)

export default Row;