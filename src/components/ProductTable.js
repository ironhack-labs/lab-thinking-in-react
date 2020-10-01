import React from 'react';

import ProductRow from '../components/ProductRow';

const ProductTable = (props) => {
  return (
    <div className="table">
      <table className="table">
        <thead>
          <tr>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Price</h2>
            </th>
          </tr>
        </thead>
        {/* <h5>Sporting Goods</h5> */}
        <tbody>
          <ProductRow
            storeData={props.storeData}
            searchInput={props.searchInput}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
