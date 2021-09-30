import React from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css';
const ProductTable = (props) => {
  return (
    <div>
      <div className="ProductTable__inner-A">
        <p>
          <strong>Name</strong>
        </p>
        <p>
          <strong>Price</strong>
        </p>
      </div>
      <div className="ProductTable__inner-B">
        {props.isStockFilterChecked === false
          ? props.goods
              .filter((item) => {
                return item.name
                  .toLowerCase()
                  .includes(props.searchTermToFilter);
              })
              .map((item) => {
                return (
                  <ProductRow
                    key={item.id}
                    isStocked={item.stocked}
                    name={item.name}
                    price={item.price}
                  />
                );
              })
          : props.goods
              .filter((item) => {
                return item.stocked === true;
              })
              .filter((item) => {
                return item.name
                  .toLowerCase()
                  .includes(props.searchTermToFilter);
              })
              .map((item) => {
                return (
                  <ProductRow
                    key={item.id}
                    isStocked={item.stocked}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
      </div>
    </div>
  );
};
export default ProductTable;
