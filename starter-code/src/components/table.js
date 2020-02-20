import React from 'react';

const Table = props => {
  //console.log(props);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.datas.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
