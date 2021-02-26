import React from 'react';

export default function ProductRow(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {props.articulos.map((elem, id) => {
          return (
            <tr>
              <td>{elem.name}</td>
              <td>{elem.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
