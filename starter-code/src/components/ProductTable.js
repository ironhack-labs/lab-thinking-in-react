import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const { products } = props;

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          
          {products.map((item) => {
            return <ProductRow key= {item.name} name={item.name} price ={item.price} stocked ={item.stocked}/>
          })}
          
        </tbody>

      </table>
      
    </div>
  );
}

export default ProductTable;