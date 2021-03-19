import React from 'react';
import ProductTable from '../producttable/ProductTable';



const FilterableProductTable = ({products}) => {

  return(
    <div>
      <ProductTable products={products}/>
    </div>
  )
}

export default FilterableProductTable;