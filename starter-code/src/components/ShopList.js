import React from 'react';
import ListItems from './ListItems';

const ShopList = props => {
  return (
    <div className="shop">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <ListItems query={props.query} stock={props.stock}></ListItems>
      </table>
    </div>
  );
};

export default ShopList;
