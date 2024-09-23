import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from './SearchBar'
import ProductTable from "./ProductTable"

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterBy, setFilterBy] = useState('')
  const [inStock, setInStock] = useState(false)
  
  let filterList = products.filter(elem => elem.name.toLowerCase().startsWith(filterBy.toLowerCase()))
  inStock && (filterList = filterList.filter(elem=>elem.inStock))
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filterBy={filterBy} setFilterBy={setFilterBy} setInStock={setInStock}/>
      <ProductTable products={filterList}/>
    </div>
  );
}

export default ProductsPage