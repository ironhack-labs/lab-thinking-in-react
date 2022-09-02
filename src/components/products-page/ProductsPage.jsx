import { useState } from "react"
import data from "../../data/data.json"
import ProductTable from "../product-table/ProductTable"
import SearchBar from "../search-bar/SearchBar"

function ProductsPage() {
  const [products, setProducts] = useState(data)

  return(
    <div>
      <h1>Iron Store</h1>
      <SearchBar data={data} />
      <ProductTable data={data}/>
    </div>
  )
}

export default ProductsPage