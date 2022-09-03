import { useState } from "react"
import ProductTable from "../product-table/ProductTable"
import SearchBar from "../search-bar/SearchBar"

function ProductsPage() {
  const [search, setSearch] = useState("")
  const [filterInStock, setFilterInStock] = useState(true)
  
  return(
    <div>
      <h1 className="text-center mb-5">Iron Store</h1>
      <SearchBar search={search} setSearch={setSearch} filterInStock={filterInStock} setFilterInStock={setFilterInStock} />
      <ProductTable search={search} filterInStock={filterInStock}/>
    </div>
  )
}

export default ProductsPage