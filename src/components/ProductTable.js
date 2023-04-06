/*
import React from "react";
import ProductRow from "./ProductRow";

function ProductTable(props) {
    const { products } = props;

    const rows = products.map((product) => (
        <ProductRow key={product.id} product={product} />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;



import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    const products = props.products;
    const rows = [];
  
    let lastCategory = null;
    products?.forEach((product) => {  // add optional chaining here
      if (product.category !== lastCategory) {
        rows.push(
          <tr key={product.category}>
            <td colSpan='2'>
              <strong>{product.category}</strong>
            </td>
          </tr>
        );
        lastCategory = product.category;
      }
      rows.push(
        <ProductRow
          key={product.name}
          product={product}
          outOfStock={!product.inStock}
        />
      );
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };
  
  export default ProductTable;
  

  
*/
// src/components/ProductTable.js

import React, { useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.inStock) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleInStockChange = (event) => {
    setInStockOnly(event.target.checked);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </div>
      <div style={{ display: 'inline-block' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
      
    </div>
  );
}

export default ProductTable;

/*
import React from 'react';

import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products, inStockOnly } = props;

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // Apply filter based on inStockOnly prop
    if (inStockOnly && !product.inStock) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.id} />);
    lastCategory = product.category;
  });

  return (
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
*/