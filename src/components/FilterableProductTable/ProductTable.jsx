import React, { useState } from 'react';
import SearchBar from './SearchBar'
import ProductRow from './ProductRow'



const ProductTable = (props) => {
  const productList = [...props.products];
  

  const [searching, setSearching] = useState(false);
  const [productListFilter, setProductList] = useState();

  const filterSearch = (search) => {
    const filterProducts = productList.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
      
    });
    setSearching(true);
    setProductList(filterProducts);
    
  };
  

  return (
      
    <section>
      <h1>IronStore</h1>
      <div>
        <SearchBar filterSearch={filterSearch} />
      </div>

      <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
   
        <ProductRow data={props} filtered={productListFilter} searching={searching}  />
  
    </table>
    </section>
  );
};

export default ProductTable;