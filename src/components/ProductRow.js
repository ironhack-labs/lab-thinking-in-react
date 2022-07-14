import { useState, React } from 'react';

const ProductRow = props => {
  return (
    <div className="App">
      <table className="mt-3 container col-6">
        <thead className="thead">
          <tr>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Price</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.pRowProp
          .filter((p) => p.name.toLowerCase().includes(props.searchProp.toLowerCase()))
          .map((p) => {
            return (
            <tr key={p.id}>
              <td>
                <h5>{!p.inStock ? <p className='red'>{p.name} </p>: <p>{p.name} </p>}</h5>
              </td>
              <td>
                <h5> {p.price}</h5>
              </td>
            </tr>
          )} 
          )}
        </tbody>
      </table>
    </div>
  );
};


export default ProductRow;






