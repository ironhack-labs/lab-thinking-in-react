import { useState } from "react";
import jsonData from "./../data.json";
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar";
function ProductsPage() {
  const [ products, setProducts ] = useState(jsonData);
  const [ filteredProducts, setFilteredProducts ] = useState(products)
  const [ letShowInStockOnly, setLetShowInStockOnly ] = useState(false)

  const search = (searchText, showInStock) => {
    const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()) &&
(showInStock ? product.inStock : true)
)
setFilteredProducts(filtered)
}

const toggleInStock = (showInStock) => {
    setLetShowInStockOnly(showInStock)
    search('', showInStock)
}


  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
      onSearch = { search }
      showInStockOnly = { letShowInStockOnly }
      onToggleInStock = { toggleInStock }
      />
      <ProductTable products = {filteredProducts}/>
    </div>
  );
}

export default ProductsPage