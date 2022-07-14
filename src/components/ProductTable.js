import React from 'react';
import ProductRow from './ProductRow'

const ProductTable = props => {

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
        {props.pTableProp
          .filter((p) => p.name.toLowerCase().includes(props.searchProp.toLowerCase()))
          .map((p) => {
        return (
        <ProductRow pRowProp={p}/>
        )}
        )}
        </tbody>
      </table>
    </div>
  );
};


export default ProductTable;