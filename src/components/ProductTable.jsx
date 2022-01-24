import React from 'react';
import 'bulma/css/bulma.css';
import ProductRow from './ProductRow';

const ProductTable = ({ itemList, searchTerm, checked }) => {
console.log(checked)

  const bySearchTerm = (product) =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.name.toUpperCase().includes(searchTerm)

  const byCheckBox = (product) => 
       product.inStock === checked
   
  
  return (
    <div className="ProductTable">
      <table className="table is-hoverable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>

            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {checked ? itemList.filter(byCheckBox).filter(bySearchTerm).map((item) => {
            return <ProductRow key={item.id}{...item} />;
          }) : itemList.filter(bySearchTerm).map((item) => {
            return <ProductRow key={item.id}{...item} />;
          })}
          
          
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
