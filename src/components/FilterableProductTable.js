import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {

  const [filteredProducts, setFilter] = useState (props.products)

  const [showOnStock, setStock] = useState(false)

  const [searchExp, setSearch] = useState("")

  const handleSearch = (event) => {
    let search = event.currentTarget.value.toLowerCase();
    setSearch(search)
    let cloneProducts = props.products.filter((product) => {
      return showOnStock? product.name.toLowerCase().includes(search) && product.stocked === true : product.name.toLowerCase().includes(search)
    })
    setFilter(cloneProducts)
  }

  const handleSelect = () => {
    setStock(!showOnStock)
    let cloneProducts;
    showOnStock ? cloneProducts = props.products.filter((product) => product.name.toLowerCase().includes(searchExp)) : cloneProducts = filteredProducts.filter((product) => product.stocked === true) 
    setFilter(cloneProducts)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onChange={handleSearch} onSelect={handleSelect} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default FilterableProductTable;
