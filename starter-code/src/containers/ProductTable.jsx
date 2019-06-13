import React from 'react';
import ProductRow from '../components/ProductRow';

const ProductTable = (props) => {
  const { items } = props;

  return (
    <table>
      <thead>
        <tr>
          <td>
            Name
          </td>
          <td>
            Price
          </td>
        </tr>
      </thead>
      <tbody>
      {
        items.map((element, index) => {
          return <ProductRow name={element.name} price={element.price} key={index}/>
        })
      }
      </tbody>
    </table>
  )
}

export default ProductTable;