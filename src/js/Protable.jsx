import React from 'react';
import Categories from './Categories'
import Products from './Products'

const Protable = ({ products, index }) => {
  const category = [];
  if (index == 0 || index == 4) {
    category.push(
      <Categories
        categories={products.category}
        key={products.category}
      />
    )
  }

  return (
    <tbody>
      <tr>
        {category}
      </tr>
      <Products
        name={products.name}
        price={products.price}
        stocked={products.stocked}
      />

    </tbody>

  );
};

export default Protable;