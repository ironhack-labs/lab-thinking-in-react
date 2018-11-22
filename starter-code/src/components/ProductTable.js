import React from 'react';
import CategoryRow from './CategoryRow';
import ProductRow  from './ProductRow';

const ProductTable = ({stock, search, check}) => (
  <section>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <CategoryRow>Sporting Goods</CategoryRow>
        {stock
          .filter( item => {
            let input = new RegExp(`${search}`, 'i');
            return (
              ( input.test(item.name) && !check) 
                ? item
                : ( input.test(item.name) && check)
                  ? item.stocked
                  : null
            );
          })
          .map( (item, index) => (
            item.category !== 'Sporting Goods'
            ? null
            : <ProductRow key={index} index={index} item={item} />
          ))
        }
        <CategoryRow>Electronics</CategoryRow>
        {stock
          .filter( item => {
            let input = new RegExp(`${search}`, 'i');
            return (
              ( input.test(item.name) && !check) 
                ? item
                : ( input.test(item.name) && check)
                  ? item.stocked
                  : null
            );
          })
          .map( (item, index) => (
            item.category === 'Electronics'
            ? <ProductRow key={index} index={index} item={item} />
            : null
          ))
        }
      </tbody>
    </table>
  </section>
);

export default ProductTable;