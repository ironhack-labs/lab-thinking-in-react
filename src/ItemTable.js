import React from 'react';
import ItemRow from './ItemRow';
import TableHeader from './TableHeader';

const ItemTable = ({ itemsList, searchedItemsList, inStock }) => {
  return (
    <article className="ItemTable">
      <table>
        <thead>
          <TableHeader>
            <th>Name</th>
            <th>Price</th>
          </TableHeader>
        </thead>
        <tbody>
          {!inStock && searchedItemsList.length >= 1
            ? searchedItemsList.map((item) => (
                <ItemRow
                  key={item.id}
                  name={item.name}
                  price={item.price}
                ></ItemRow>
              ))
            : inStock && searchedItemsList.length >= 1 ?
            searchedItemsList.filter(item => item.stocked === true).map((item) => (
                <ItemRow
                  key={item.id}
                  name={item.name}
                  price={item.price}
                ></ItemRow>
              ))
            : itemsList &&
              itemsList.map((item) => (
                <ItemRow
                  key={item.id}
                  name={item.name}
                  price={item.price}
                ></ItemRow>
              ))}
        </tbody>
      </table>
    </article>
  );
};
 
export default ItemTable;